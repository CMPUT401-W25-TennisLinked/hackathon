# Variables
BACKEND_DIR = backend
FRONTEND_DIR = frontend

# Default target
all: run

# Install dependencies
.PHONY: install
install:
	cd $(BACKEND_DIR) && pip install -r requirements.txt
	cd $(FRONTEND_DIR) && npm install

# Run both frontend and backend
.PHONY: run
run:
	cd $(FRONTEND_DIR) && npm start & cd $(BACKEND_DIR) && python manage.py runserver

# Run the backend
.PHONY: backend
backend:
	cd $(BACKEND_DIR) && python manage.py runserver

.PHONY: migrate
migrate:
	cd $(BACKEND_DIR) && python manage.py migrate

.PHONY: migrations
migrations:
	cd $(BACKEND_DIR) && python manage.py makemigrations

# Run the frontend
.PHONY: frontend
frontend:
	cd $(FRONTEND_DIR) && npm start

# Clean up Python cache
clean:
	find . -name "*.pyc" -delete
	find . -name "__pycache__" -delete

.PHONY: all install run backend frontend clean
