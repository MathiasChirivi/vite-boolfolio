<script>
export default {
    name: "ErrorPage",
    data() {
        return {
            errorMessage: {
                401: "Unauthorized - Access denied. Please log in.",
                404: "Nothing found - The requested page could not be found.",
                500: "Internal Server Error - An unexpected error occurred on the server.",
                503: "Service Unavailable - The server is currently unavailable.",
            }
        }
    },
}
</script>

<template>
    <section class="error-page  d-flex align-items-center justify-content-center">
      <div class="container">
        <h1 class="error-code mb-1">Error {{ $route.params.code }}</h1>
        <p v-if="errorMessage[$route.params.code]" class="error-message text-white">{{ errorMessage[$route.params.code] }}</p>
        <p v-else class="error-message">Something went wrong</p>
      </div>
    </section>
  </template>


<style scoped>
.error-page {
  min-height: 100vh;
  background-color: #222;
}

.error-code {
  font-size: 4rem;
  font-weight: bold;
  color: #dc3545;
}

.error-message {
  font-size: 1.5rem;
  color: #343a40;
}
</style>