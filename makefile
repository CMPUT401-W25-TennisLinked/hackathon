# Variables
BACKEND_DIR = backend
FRONTEND_DIR = frontend
CONCURRENTLY = npx concurrently

# Default target
all: run

# Install dependencies
install:
	cd $(BACKEND_DIR) && pip install -r requirements.txt
	cd $(FRONTEND_DIR) && npm install

# Run both frontend and backend
run:
	$(CONCURRENTLY) "make backend" "make frontend"

# Run the backend
backend:
	cd $(BACKEND_DIR) && python manage.py runserver

# Run the frontend
frontend:
	cd $(FRONTEND_DIR) && npm start

# Clean up Python cache
clean:
	find . -name "*.pyc" -delete
	find . -name "__pycache__" -delete

.PHONY: all install run run-backend run-frontend clean
