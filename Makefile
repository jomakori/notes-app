# For local development via Encore CLI
## w/ backend dashboard
## Note: Commands must be run in separate terminals

backend_up:
	doppler secrets --config dev && \
	doppler run --config dev \
		--command='encore run'

frontend_up:
	doppler secrets --config dev && \
	cd frontend && \
	doppler run --config dev \
		--command='npm run dev'

# For local development via Docker Compose
## w/o backend dashboard
## Note: Auto loads the frontend & backend

up: conditional_down		# Confirm no containers are running
	doppler secrets --config dev_docker && \
	doppler run --config dev_docker \
		--command='encore build docker note-app:backend --config=encore.docker.json' && \
	doppler run --config dev_docker \
		--mount-template doppler-compose.yml \
		--mount docker-compose.yml \
		--command 'docker-compose up --build'


down:
	doppler run --config dev_docker \
		--mount-template doppler-compose.yml \
		--mount docker-compose.yml \
		--command 'docker-compose down'

conditional_down:
	@if [ -n "$$(docker ps -q)" ]; then \
		$(MAKE) down; \
	else \
		echo "No containers are running."; \
	fi
