package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"
)

func GetCourses(w http.ResponseWriter, r *http.Request) {
	var courses []Course
	var tags []string

	const defaultPageSize = 25
	pageSize := defaultPageSize
	page := 1

	tagsQuery := r.URL.Query().Get("tags")
	if tagsQuery != "" {
		tags = strings.Split(tagsQuery, ",")
	}

	if pageQuery := r.URL.Query().Get("page"); pageQuery != "" {
		if p, err := strconv.Atoi(pageQuery); err == nil {
			page = p
		}
	}

	if pageSizeQuery := r.URL.Query().Get("pageSize"); pageSizeQuery != "" {
		if ps, err := strconv.Atoi(pageSizeQuery); err == nil {
			pageSize = ps
		}
	}

	offset := (page - 1) * pageSize

	query := DB.Preload("Tags").Offset(offset).Limit(pageSize)
	if len(tags) > 0 {
		query = query.Joins("JOIN course_tags ON courses.id = course_tags.course_id").
			Joins("JOIN tags ON course_tags.tag_id = tags.id").
			Where("tags.name IN ?", tags)
	}

	query.Find(&courses)
	json.NewEncoder(w).Encode(courses)
}
