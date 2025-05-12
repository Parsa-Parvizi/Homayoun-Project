<template>
  <div class="login-container">
    <h2>ورود به سیستم</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">نام کاربری:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">رمز عبور:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
      <button type="submit" :disabled="loading">
        {{ loading ? 'در حال ورود...' : 'ورود' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: '',
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.error = '';
      
      try {
        const response = await fetch('/myapp/report/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('is_superuser', data.is_superuser);
          
          if (data.is_superuser) {
            this.$router.push('/myapp/admin/report');
          } else {
            this.$router.push('/myapp/');
          }
        } else {
          this.error = data.message || 'خطا در ورود به سیستم';
        }
      } catch (error) {
        console.error('Error:', error);
        this.error = 'خطا در ارتباط با سرور';
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  direction: rtl;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

.error-message {
  color: #ff0000;
  margin-bottom: 15px;
  text-align: center;
}
</style> 