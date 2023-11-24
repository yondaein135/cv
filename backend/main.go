package main

import (
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func main() {
	InitializeDB()

	r := mux.NewRouter()
	port := ":8080"
	r.HandleFunc("/api/courses", GetCourses).Methods("GET")

	// Configure CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:4200"},
		AllowedMethods: []string{"GET"},
		AllowedHeaders: []string{"Content-Type", "Authorization"},
	}).Handler(r)

	err := http.ListenAndServe(port, corsHandler)
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
	log.Printf("Service running at %s", port)
}
