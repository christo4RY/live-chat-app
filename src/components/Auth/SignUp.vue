<template>
  <h3 class="text-green mb-3">Sign Up</h3>
  <form>
    <div class="mb-3">
      <input type="text" class="form-control" placeholder="Full Name" />
    </div>
    <div class="mb-3">
      <input type="email" class="form-control" placeholder="Email" />
    </div>
    <div class="mb-3">
      <input type="password" class="form-control" placeholder="Password" />
    </div>
    <div class="mt-3">
      <span class="text-link" @click="$emit('notShowLogin')">
        Are you create account?
      </span>
      <button class="btn btn-green float-end">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>
