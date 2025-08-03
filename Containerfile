# Use UBI Node.js 20 minimal image
#FROM registry.access.redhat.com/ubi9/nodejs-20-minimal:latest
FROM docker.io/library/node:lts-alpine

USER root
# Install dependencies in production mode
#RUN npm ci --omit=dev && npm cache clean --force
RUN npm install -g bun


# Set the working directory
WORKDIR /opt/app-root/app

# Copy application source
# Copy package files
ADD package*.json ./
RUN bun install

COPY src ./src
COPY public ./public
#COPY app/next.config.ts ./
COPY tsconfig.json ./
COPY .env ./
#COPY app/eslint.config.mjs ./
#COPY app/tailwind.config.js ./
#COPY app/postcss.config.mjs ./

#USER root
#RUN chown -R 1001:0 /opt/app-root/app
#USER 1001
RUN ls -l /opt/app-root/app

# Build the Next.js application
#RUN bun run build
#RUN bun next telemetry disable

# Remove source files to keep image lean
#RUN rm -rf src && \
#    rm -f next.config.ts tsconfig.json next-env.d.ts

# Expose the port the app runs on
EXPOSE 4321

# Switch to non-root user
#USER 1001

# Start the application
CMD ["bun","run", "dev"] 