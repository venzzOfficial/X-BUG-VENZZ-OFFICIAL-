<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VENZZ BUG WA</title>
  <style>
    body {
      background-color: #000;
      color: white;
      font-family: 'Courier New', monospace;
      text-align: center;
    }
    .login-box, .menu-box {
      background: #111;
      padding: 20px;
      margin: 40px auto;
      border-radius: 10px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 0 10px red;
    }
    input, select, button {
      width: 90%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      font-size: 16px;
    }
    button {
      background: red;
      color: white;
      cursor: pointer;
    }
    .logo {
      width: 150px;
      margin: 20px auto;
    }
    .venzz-title {
      font-size: 28px;
      color: red;
      text-shadow: 0 0 10px white;
      margin-top: 10px;
    }
    .feature-btn {
      margin: 8px auto;
      display: block;
      background: white;
      color: black;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="login-box" id="loginBox">
    <img src="A_digital_graphic_design_logo_for_\"VENZZ_OFFICIAL\".png" class="logo" alt="Venzz Logo">
    <div class="venzz-title">VENZZ OFFICIAL</div>
    <h3>Login Dulu</h3>
    <input type="text" id="username" placeholder="Nama">
    <input type="password" id="password" placeholder="Sandi">
    <button onclick="login()">Masuk</button>
    <p style="font-size: 12px; color: gray;">Nama: <b>venzzbug</b> | Sandi: <b>venzzinvictus</b></p>
  </div>  <div class="menu-box" id="menuBox" style="display: none;">
    <h2>MENU BUG</h2>
    <select id="durasi">
      <option value="1minggu">1 Minggu Venzz</option>
      <option value="2minggu">2 Minggu Venzz</option>
      <option value="1bulan">1 Bulan Venzz</option>
      <option value="5bulan">5 Bulan Venzz</option>
      <option value="permanen">Permanen Venzz</option>
    </select>
    <button class="feature-btn" onclick="kirimBug('Fcinvisible')">Fcinvisible</button>
    <button class="feature-btn" onclick="kirimBug('Forclose')">Forclose</button>
    <button class="feature-btn" onclick="kirimBug('CrashUI')">CrashUI</button>
    <button class="feature-btn" onclick="kirimBug('Invisible')">Invisible</button>
    <button class="feature-btn" onclick="kirimBug('XBlank UI')">XBlank UI</button>
  </div>  <script>
    function login() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      if (user === 'venzzbug' && pass === 'venzzinvictus') {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('menuBox').style.display = 'block';
      } else {
        alert('Nama atau sandi salah!');
      }
    }

    function kirimBug(tipe) {
      const durasi = document.getElementById('durasi').value;
      const nomorBot = ['6281234567890', '6282323490310', '6281111111111'];
      const randomNomor = nomorBot[Math.floor(Math.random() * nomorBot.length)];
      const pesan = `BUG ${tipe} - VENZZ - DURASI: ${durasi}`;
      const link = `https://wa.me/${randomNomor}?text=${encodeURIComponent(pesan)}`;
      window.open(link, '_blank');
    }
  </script></body>
</html>
