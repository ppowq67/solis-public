       (async () => {
           const API_BASE = window.API_BASE_URL || 'https://api.solisai.video/api';
           try {
               const response = await fetch(`${API_BASE}/auth/verify`, {
                   method: 'GET',
                   credentials: 'include'
               });
               if (!response.ok) {
                   console.log('Unauthorized, redirecting to login');
                   window.location.href = '/welcome.html';
               }
           } catch (error) {
               console.error('Auth check failed:', error);
               window.location.href = '/login.html';
           }
       })();