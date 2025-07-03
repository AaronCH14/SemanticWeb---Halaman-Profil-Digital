import './src/style.css';
import fotoProfil from './src/assets/foto1.jpg';
import piusImg from './src/assets/pius.jpg';
import alexImg from './src/assets/1725184404166.jpg';
import ericImg from './src/assets/1729040681751.jpg';


const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    <div class="main-bg">
      <div class="profile-header">
        <div class="profile-img">
          <img src="${fotoProfil}" alt="Foto Profil">    
      </div>
        <h1>Profil Digital</h1>
        <p class="subtitle">Selamat datang di profil digital saya</p>
      </div>
        <div class="profile-card">
          <div class="profile-info" itemscope itemtype="https://schema.org/Person">
            <div class="profile-title">
              <i class="ri-account-circle-fill"></i>
              <span>Profil Saya</span>
            </div>
            <div class="profile-list">
              <div><i class="ri-user-star-line"></i><b>Nama:</b> <span itemprop="name">Christopher Aaron</span></div>
              <div><i class="ri-briefcase-4-line"></i><b>Job/Title:</b> <span itemprop="jobTitle">Mahasiswa Informatika - Fullstack Web Developer</span></div>
                <div><i class="ri-map-pin-2-line"></i><b>Alamat:</b>
                  <span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                  <span itemprop="streetAddress">Kp. Klitren Lor Gk 3, No.251</span>
                  <meta itemprop="addressRegion" content="DIY Yogyakarta">
                  <meta itemprop="addressCountry" content="Indonesia">
                  </span>
                </div>
            <div><i class="ri-earth-line"></i><b>Region:</b> DIY Yogyakarta, Indonesia</div>
              <div><i class="ri-building-4-line"></i><b>Afliasi:</b> <span itemprop="affiliation">Universitas Kristen Duta Wacana</span></div>
                <div style="display:none;">
                  <span itemprop="sameAs">https://www.linkedin.com/in/christopher-aaron-54790334b/</span>
                  <span itemprop="sameAs">https://www.tiktok.com/@ini_aku_d4c</span>
                  <span itemprop="sameAs">https://www.instagram.com/lexgrayron/?hl=en</span>
                </div>
            </div>
          </div>
          <div class="profile-contact">
            <div class="profile-title green">
              <i class="ri-phone-fill"></i>
              <span class="kontakku">Kontak</span>
            </div>
            <div class="profile-list">
              <div><i class="ri-phone-line"></i><b>Telepon 1:</b> <span itemprop="telephone">+62 898-3049-046 (utama)</span></div>
              <div><i class="ri-smartphone-line"></i><b>Telepon 2:</b> <span itemprop="telephone">+62 858-2171-8411</span></div>
              <div><i class="ri-mail-line"></i><b>Email 1:</b> <span itemprop="email">christopheraaron253@email.com</span></div>
              <div><i class="ri-mail-send-line"></i><b>Email 2:</b> <span itemprop="email">christopher.aaron@ti.ukdw.ac.id</span></div>
            </div>
          </div>
        </div>
        <div class="section-card">
          <div class="section-title pink">
            <i class="ri-share-forward-line"></i>
            <span>Media Sosial Saya</span>
          </div>
          <a href="https://www.linkedin.com/in/christopher-aaron-54790334b/" target="_blank" class="social-link-wrapper" style="color: white; text-decoration: none;">
          <div class="social-row">
            <div class="social-box linkedin">
              <i class="ri-linkedin-box-fill"></i>
              <div class="social-label">LinkedIn</div>
              <div class="social-username">@Christopher Aaron</div>
            </div>
            </a>
            <a href="https://www.tiktok.com/@ini_aku_d4c" target="_blank" class="social-link-wrapper" style="color: white; text-decoration: none;">
            <div class="social-box tiktok">
              <i class="ri-tiktok-fill"></i>
              <div class="social-label">TikTok</div>
              <div class="social-username">@Kang Hotaru</div>
            </div>
            </a>
            <a href="https://www.instagram.com/lexgrayron/?hl=en" target="_blank" class="social-link-wrapper" style="color: white; text-decoration: none;">
            <div class="social-box instagram">
              <i class="ri-instagram-fill"></i>
              <div class="social-label">Instagram</div>
              <div class="social-username">@lexgrayron</div>
            </div>
            </a>
          </div>
        </div>
        <div class="section-card">
          <div class="section-title blue">
            <i class="ri-group-2-fill"></i>
            <span class="mediateman">Media Teman-teman Saya</span>
          </div>
          <div class="friends-row">
            <div class="friend-box" itemscope itemtype="https://schema.org/Person">
              <div class="friend-img green">
                <img src="${piusImg}" alt="Foto Profil">
              </div>
            <div class="friend-name" itemprop="name">Pius Jasticio Harnando</div>
              <div class="friend-role" itemprop="jobTitle">App Developer</div>
            <div style="display: none;">
              <span itemprop="sameAs">https://www.facebook.com/nan.ndo.90?mibextid=wwXIfr&rdid=gbkK4jYfyntwO7iR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16ZuUFPLHK%2F%3Fmibextid%3DwwXIfr#</span>
              <span itemprop="sameAs">https://www.tiktok.com/@cukup1tauaja?_t=ZS-8xfRkcin3hY&_r=1</span>
              <span itemprop="sameAs">https://www.instagram.com/piusnando_/?hl=en</span>
            </div>
            <div class="friend-socials">
              <a class="facebook" href="https://www.facebook.com/nan.ndo.90?mibextid=wwXIfr&rdid=gbkK4jYfyntwO7iR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16ZuUFPLHK%2F%3Fmibextid%3DwwXIfr#"><i class="ri-facebook-fill"></i></a>
              <a class="tiktok" href="https://www.tiktok.com/@cukup1tauaja?_t=ZS-8xfRkcin3hY&_r=1"><i class="ri-tiktok-fill"></i></a>
              <a class="instagram" href="https://www.instagram.com/piusnando_/?hl=en"><i class="ri-instagram-fill"></i></a>
            </div>
          </div>

          <div class="friend-box" itemscope itemtype="https://schema.org/Person">
            <div class="friend-img pink">
              <img src="${alexImg}" alt="Foto Profil">
              <i class="ri-user-3-fill"></i></div>
            <div class="friend-name" itemprop="name">Alexandro Aurellino Anandito</div>
            <div class="friend-role" itemprop="jobTitle">Machine Learning Engineer</div>
            <div style="display: none;">
              <span itemprop="sameAs">https://www.linkedin.com/in/alxarl/</span>
              <span itemprop="sameAs">https://github.com/AlexandroAurellino</span>
              <span itemprop="sameAs">https://www.instagram.com/alx_arl/?hl=en</span>
            </div>
          <div class="friend-socials">
            <a class="linkedin" href="https://www.linkedin.com/in/alxarl/"><i class="ri-linkedin-box-fill"></i></a>
            <a class="github" href="https://github.com/AlexandroAurellino"><i class="ri-github-fill"></i></a>
            <a class="instagram" href="https://www.instagram.com/alx_arl/?hl=en"><i class="ri-instagram-fill"></i></a>
          </div>
        </div>

        <div class="friend-box" itemscope itemtype="https://schema.org/Person">
          <div class="friend-img yellow">
            <img src="${ericImg}" alt="Foto Profil">
            <i class="ri-user-3-fill"></i></div>
            <div class="friend-name" itemprop="name">Eric Vincent Kho</div>
            <div class="friend-role" itemprop="jobTitle">Cloud Engineer</div>
          <div style="display: none;">
            <span itemprop="sameAs">https://www.linkedin.com/in/ericvkho/</span>
            <span itemprop="sameAs">https://github.com/eric-vinn</span>
            <span itemprop="sameAs">https://www.instagram.com/eric_vinn/?hl=en</span>
          </div>
          <div class="friend-socials">
            <a class="linkedin" href="https://www.linkedin.com/in/ericvkho/"><i class="ri-linkedin-box-fill"></i></a>
            <a class="github" href="https://github.com/eric-vinn"><i class="ri-github-fill"></i></a>
            <a class="instagram" href="https://www.instagram.com/eric_vinn/?hl=en"><i class="ri-instagram-fill"></i></a>
          </div>
        </div>
        </div>
      </div>
        <footer>
          © 2025 Christopher Aaron. Dibuat untuk memenuhi penugasan Semantic Web.
        </footer>
  `;
}
