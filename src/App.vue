<template>
  <div class="image-container">
    <nav>
      <img
        id="app-logo"
        src="https://github.com/BlazeTheGr8/image-repo/blob/main/JC_Logo_Col_Dark_300.png?raw=true"
      />
      <div class="nav-buttons">
        <button 
        class="button-style"
        id="register-button">{{ registerButtonText }}</button>
        <img
          id="user-circle"
          src="https://github.com/BlazeTheGr8/image-repo/blob/main/user-circle.png?raw=true"
        />
      </div>
    </nav>
    <div id="text-container">
      <div id="text-div">
        <h1 id="amount">{{ depositAmountText }}</h1>
        <p>{{ depositText }}</p>
        <div id="button-container-2"><button class="button-style"
        id="signup-button">{{ signUpButtonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerButtonText: '',
      depositAmountText: '',
      depositText: '',
      signUpButtonText: '',
    };
  },
  mounted() {
    this.fetchTextContent();
  },
  methods: {
    async fetchTextContent() {
      try {
        const response = await fetch('http://localhost:3000/api/page');
        const data = await response.json();
        this.registerButtonText = data.registerButtonText;
        this.depositAmountText = data.depositAmountText;
        this.depositText = data.depositText;
        this.signUpButtonText = data.signUpButtonText;
      } catch (error) {
        console.error('Error fetching text content:', error);
      }
    },
  },
};
</script>