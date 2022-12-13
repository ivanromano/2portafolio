import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const token = ref(null);
  const time = ref(null)
  const access = async (userName, email, password) => {
    try {
      console.log("hiciste click");
      const res = await axios.post("https://first-api-node.onrender.com/api/v1/auth/login", {
        userName: userName,
        email: email,
        password: password,
      });
      console.log(res.data);
      token.value = res.data.token;
      localStorage.setItem('user', 'vas a necesitar mas que eso para hackearme :)')
      setTime()
    } catch (error) {
      if (error.response) {
        throw error.response.data
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Algo paso al preparar la petición que lanzo un Error
        console.log('Error', error.message);
      }
    }
  };

  const register = async (userName, email, password, repassword) => {
    try {
      const res = await axios.post("https://first-api-node.onrender.com/api/v1/auth/register", {
        userName: userName,
        email: email,
        password: password,
        repassword: repassword,
      });
      token.value = res.data.token;
      time.value = res.data.expiresIn;
      localStorage.setItem('user', 'vas a necesitar mas que eso para hackearme :)')
      setTime()
    } catch (error) {
      if (error.response) {
        throw error.response.data
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Algo paso al preparar la petición que lanzo un Error
        console.log('Error', error.message);
      }
    }
  };


  const setTime = () => {
    setTimeout(() => {
      console.log("se refresco");
      refreshToken();
    }, time.value * 1000 - 6000);
  };

  const refreshToken = async () => {
    try {
      const res = await axios.get("https://first-api-node.onrender.com/api/v1/auth/refresh");
      // console.log(res.data);
      token.value = res.data.token;
      time.value = res.data.expiresIn;
      localStorage.setItem('user', 'vas a necesitar mas que eso para hackearme :)')
      setTime();
    } catch (error) {
      console.log(error.message);
      localStorage.removeItem('user')
    }
  };

  const cerrarSesion = async() => {
    try {
      await axios.get('https://first-api-node.onrender.com/api/v1/auth/logout')
      console.log('nun');
    } catch (error) {
      console.log(error.message);
    } finally {
      resetToken()
      localStorage.removeItem('user')
    }
  }

  const resetToken = () => {
    token.value = null
    time.value = null
  }

  const crearTienda = async(product, precio, stock) => {
    try {
      await axios.get('https://first-api-node.onrender.com/api/v1/tienda/creatienda', {
        product: product,
        precio: precio,
        stock: stock,
      })
      console.log('nun');
    } catch (error) {
      console.log(error.message);
    }
  }

  return {
    token,
    time,
    access,
    register,
    cerrarSesion,
    setTime,
    refreshToken,
    crearTienda
  };
});
