(function () {
  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('sf-footer-partial')) return;

    var root = document.getElementById('sf-footer-partial-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'sf-footer-partial-root';
      document.body.appendChild(root);
    }

    var year = new Date().getFullYear();

    root.innerHTML = `
      <footer id="sf-footer-partial" class="bg-black text-gray-400 py-16 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            <div>
              <img src="images/logo-sagufoundation.png" alt="SAGU Foundation" class="h-14 w-auto mb-5 brightness-90"/>
              <p class="text-lg leading-relaxed mb-6">
                <strong class="text-white">S</strong>trengthening, <strong class="text-white">A</strong>ssisting, <strong class="text-white">G</strong>enerating, <strong class="text-white">U</strong>tilizing — empowering Papua through education since 2015.
              </p>
              <div class="flex gap-4 text-xl">
                <a href="https://www.instagram.com/sagufoundation/" target="_blank" class="hover:text-[#e6a817] transition-colors" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/SAGUFoundation/" target="_blank" class="hover:text-[#e6a817] transition-colors" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.tiktok.com/@sagufoundation" target="_blank" class="hover:text-[#e6a817] transition-colors" title="TikTok"><i class="fa-brands fa-tiktok"></i></a>
                <a href="https://www.youtube.com/@sagufoundation" target="_blank" class="hover:text-[#e6a817] transition-colors" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://whatsapp.com/channel/sagufoundation" target="_blank" class="hover:text-[#e6a817] transition-colors" title="WhatsApp Channel"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            <div>
              <h4 class="text-white font-bold mb-5 text-lg uppercase tracking-wider">Quick Links</h4>
              <ul class="space-y-3 text-lg">
                <li><a href="who-we-are.html" class="hover:text-[#e6a817] transition-colors">Who We Are</a></li>
                <li><a href="strategic-direction.html" class="hover:text-[#e6a817] transition-colors">Our Strategic &amp; Direction</a></li>
                <li><a href="what-we-do.html" class="hover:text-[#e6a817] transition-colors">What We Do</a></li>
                <li><a href="team.html" class="hover:text-[#e6a817] transition-colors">Our Team</a></li>
                <li><a href="partners.html" class="hover:text-[#e6a817] transition-colors">Partners</a></li>
                <li><a href="collaborators.html" class="hover:text-[#e6a817] transition-colors">Collaborators</a></li>
                <li><a href="blog.html" class="hover:text-[#e6a817] transition-colors">Blog</a></li>
                <li><a href="index.html#gallery" class="hover:text-[#e6a817] transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-bold mb-5 text-lg uppercase tracking-wider">Programs</h4>
              <ul class="space-y-3 text-lg">
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">General English</a></li>
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">IELTS/TOEFL Preparation</a></li>
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">IELTS/TOEFL Simulation Test</a></li>
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">Computer Literacy</a></li>
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">Community Development</a></li>
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">Internship</a></li>
                <li><a href="index.html#programs" class="hover:text-[#e6a817] transition-colors">Scholarship Club</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-bold mb-5 text-lg uppercase tracking-wider">Contact</h4>
              <ul class="space-y-4 text-lg">
                <li class="flex gap-3">
                  <i class="fa-solid fa-location-dot text-[#e6a817] mt-1 w-4 flex-shrink-0"></i>
                  <span>Jl. Pasar Baru Youtefa, Kompleks ATC Blok H5, Kotaraja, Jayapura, Papua, Indonesia</span>
                </li>
                <li class="flex gap-3">
                  <i class="fa-solid fa-phone text-[#e6a817] mt-0.5 w-4 flex-shrink-0"></i>
                  <a href="tel:+6281312170710" class="hover:text-[#e6a817] transition-colors">+62 813-1217-0710</a>
                </li>
                <li class="flex gap-3">
                  <i class="fa-solid fa-envelope text-[#e6a817] mt-0.5 w-4 flex-shrink-0"></i>
                  <a href="mailto:info@sagufoundation.org" class="hover:text-[#e6a817] transition-colors">info@sagufoundation.org</a>
                </li>
                <li class="flex gap-3">
                  <i class="fa-solid fa-globe text-[#e6a817] mt-0.5 w-4 flex-shrink-0"></i>
                  <a href="https://sagufoundation.org" target="_blank" class="hover:text-[#e6a817] transition-colors">sagufoundation.org</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="text-lg">&copy; ${year} SAGU Foundation. All rights reserved. | Jayapura, Papua, Indonesia</p>
            <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
              <a href="privacy-policy.html" class="hover:text-[#e6a817] transition-colors">Privacy Policy</a>
              <a href="term-condition.html" class="hover:text-[#e6a817] transition-colors">Terms &amp; Conditions</a>
              <a href="site-map.html" class="hover:text-[#e6a817] transition-colors">Site Map</a>
              <a href="faq.html" class="hover:text-[#e6a817] transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  });
})();
