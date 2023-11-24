package main

import (
	"gorm.io/gorm"
)

type Course struct {
	gorm.Model
	Title              string `gorm:"size:255"`
	IssuingInstitution string `gorm:"size:100"`
	Hours              int
	Creator            string `gorm:"size:100"`
	Tags               []Tag  `gorm:"many2many:course_tags;"`
	Type               string `gorm:"size:50"`
	VerificationLink   string `gorm:"size:255"`
}

type Tag struct {
	gorm.Model
	Name    string   `gorm:"size:50"`
	Courses []Course `gorm:"many2many:course_tags;"`
}
