# ========================
# career-site Dev Makefile
# ========================

# Build, tag, and version vars
VERSION_FILE := VERSION
VERSION ?= $(shell cat $(VERSION_FILE))
IMAGE_REPO ?= 192.168.2.17:5000
IMAGE_NAME ?= career-site
IMAGE_TAG ?= $(VERSION)
IMAGE_FULL := $(IMAGE_REPO)/$(IMAGE_NAME):$(IMAGE_TAG)

# =================================
# Dev Quality of Life
# =================================

.PHONY: run build
run:
	rm -rf out
	npm run dev

build:
	npm run build

# =================================
# Docker build, tag, and push
# =================================

.PHONY: docker-build
docker-build:
	docker build -t $(IMAGE_FULL) . --no-cache

.PHONY: docker-push
docker-push:
	docker push $(IMAGE_FULL)

.PHONY: tag
tag:
	@version=$$(cat VERSION); \
	git tag $$version; \
	git push origin main --tags