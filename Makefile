up: conditional_down							# Confirm no containers are running
	doppler secrets --config dev && \
	doppler run --config dev \
		--mount-template doppler-compose.yml \
		--mount docker-compose.yml \
		--command 'docker-compose up --build'

down:
	doppler run --config dev \
		--mount-template doppler-compose.yml \
		--mount docker-compose.yml \
		--command 'docker-compose down'

conditional_down:
	@if [ -n "$$(docker ps -q)" ]; then \
		$(MAKE) down; \
	else \
		echo "No containers are running."; \
	fi
