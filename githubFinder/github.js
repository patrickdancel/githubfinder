class Github {
    constructor() {
      this.client_id = '676f56f223145ebb3094';
      this.client_secret = 'df9969dad4f0548c30d97f287218ac39d227d215';
      this.repos_count = 5;
      this.repos_sort = 'created: asc'
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }
