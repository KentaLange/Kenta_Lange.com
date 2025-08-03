 # Define Image and Container Names
WEB_IMAGE_NAME = kenta-webserver-image
WEB_CONTAINER_NAME = kenta-webserver

# Environment variable, defaults to ""
env ?=

# Determine the .env file to use
ifneq ($(env),)
    ENV_FILE = .env.$(env)
    ifneq ($(env), dev)
     APP_ENV = $(env)
    endif
else
    ENV_FILE = .env
    APP_ENV = dev
endif

# Check if the .env file exists


ENV_FILE_EXISTS = $(wildcard $(ENV_FILE))

# Default target
all: build

# List available targets
list:
	@echo"Available targets:"
	@echo"  all       - Build all images"
	@echo"  build     - Build all images"
	@echo"  run       - Run all containers"
	@echo"  stop      - Stop and remove all containers"
	@echo"  clean     - Remove all built images"
	@echo"  list      - List available targets"
	@echo"  env       - Show the current environment"

# Build targets
build:
	podman build --build-arg APP_ENV=$(APP_ENV) -t $(WEB_IMAGE_NAME) -f Containerfile .

# Run target to start containers
test:
ifeq ($(ENV_FILE_EXISTS),)
	podman run --replace -d --name $(WEB_CONTAINER_NAME) -p 4321:4321 $(WEB_IMAGE_NAME)
else
	podman run --replace -d --name $(WEB_CONTAINER_NAME) -p 4321:4321 --env-file $(ENV_FILE) $(WEB_IMAGE_NAME)
endif

# Stop and remove containers
stop:
	podman stop $(WEB_CONTAINER_NAME) || true

# Clean up images
clean:
	podman rmi $(WEB_IMAGE_NAME) $(LANGFLOW_IMAGE_NAME) || true

# Show the current environment
env:
	@echo"Current environment: $(env)"
	@echo"Using env file: $(ENV_FILE)"

.PHONY: all build run stop clean list env
