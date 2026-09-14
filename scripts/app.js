/* ==========================================================================
   MAVEN — PEER-TO-PEER RENTAL PLATFORM
   Interactive Logic & Simulations (English Edition)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initStoryPlayer();
  initCalculator();
  initRoleToggle();
  initFaqAccordion();
  initModals();
});

/* ==========================================================================
   1. Navbar Scroll Effect & Smooth Navigation
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile navigation toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#FFFFFF';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 30px rgba(142, 40, 71, 0.1)';
      }
    });
  }
}

/* ==========================================================================
   2. Interactive Story Player (Character Mai's Journey)
   ========================================================================== */
const storyStepsData = [
  {
    step: 1,
    title: "1. Discover the Item You Need (Discovery)",
    desc: "Mai is planning a 3-day getaway to Dalat and wants a Fujifilm X100V to capture memories, but doesn't want to spend $850 for a single trip. She browses Maven and finds one available nearby for just $8/day.",
    phoneHeader: "Explore Nearby Gear",
    mockupHTML: `
      <div class="mockup-step-content">
        <span class="mockup-badge">Step 1 • Search</span>
        <div class="mockup-card-preview">
          <div style="font-size:0.78rem; color:#8E2847; font-weight:700; margin-bottom:4px;">📍 Dalat Area • 0.8 miles away</div>
          <h5 style="font-size:0.95rem; color:#3E0F1F; margin-bottom:6px;">Fujifilm X100V Silver</h5>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:1.15rem; font-weight:700; color:#8E2847;">$8<span style="font-size:0.75rem; font-weight:normal;">/day</span></span>
            <span style="font-size:0.78rem; background:#FFE6EE; padding:2px 8px; border-radius:10px; color:#8E2847; font-weight:600;">⭐️ 4.9 (48 reviews)</span>
          </div>
        </div>
        <div style="background:#FFF0F4; border-radius:12px; padding:12px; font-size:0.8rem; color:#6C3346; margin-top:auto;">
          💡 <strong>Smart Decision:</strong> 3-day rental costs $24 instead of buying for $850!
        </div>
      </div>
    `
  },
  {
    step: 2,
    title: "2. Inspect Details & Reserve (Booking)",
    desc: "Mai checks lender Tuan's verified profile (eKYC verified, 100% 5-star ratings). The transparent fee summary shows: $24 rental (3 days) + $75 refundable deposit. Mai books in one click.",
    phoneHeader: "Booking Summary",
    mockupHTML: `
      <div class="mockup-step-content">
        <span class="mockup-badge">Step 2 • Transparent Pricing</span>
        <div class="mockup-card-preview">
          <div style="font-size:0.85rem; font-weight:700; color:#3E0F1F; margin-bottom:8px;">Dates: Oct 18 – Oct 21 (3 Days)</div>
          <div style="font-size:0.82rem; color:#6C3346; margin-bottom:4px;">• Rental Fee ($8 x 3): <strong>$24.00</strong></div>
          <div style="font-size:0.82rem; color:#6C3346; margin-bottom:6px;">• Escrow Deposit (100% Refundable): <strong>$75.00</strong></div>
          <div style="border-top:1px dashed #F4C8D6; padding-top:6px; font-weight:700; color:#8E2847; font-size:0.95rem;">Total Authorized: $99.00</div>
        </div>
        <div style="background:#FFE6EE; border-radius:10px; padding:10px; font-size:0.78rem; color:#8E2847; text-align:center;">
          🔒 Deposit is securely held in Maven Escrow, not paid to the lender yet.
        </div>
      </div>
    `
  },
  {
    step: 3,
    title: "3. Lender Approval & Handover Evidence (Handover)",
    desc: "The lender reviews Mai's verified reputation and approves. When meeting for handover, both take time-stamped condition photos and inspect serial numbers directly in the app.",
    phoneHeader: "Handover & Evidence",
    mockupHTML: `
      <div class="mockup-step-content">
        <span class="mockup-badge">Step 3 • Digital Check-in</span>
        <div class="mockup-card-preview" style="text-align:center;">
          <div style="width:48px; height:48px; border-radius:50%; background:#FFE6EE; color:#8E2847; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:1.3rem;">📸</div>
          <div style="font-size:0.85rem; font-weight:700; color:#3E0F1F;">4 Condition Photos Verified</div>
          <div style="font-size:0.75rem; color:#8C475A; margin-top:2px;">Serial No: #FX100V-982341 (Pristine condition)</div>
        </div>
        <div style="background:#FFF0F4; border-radius:12px; padding:10px; font-size:0.8rem; color:#6C3346; text-align:center; margin-top:auto;">
          ✓ Both parties digitally signed the handover confirmation.
        </div>
      </div>
    `
  },
  {
    step: 4,
    title: "4. Enjoy the Experience to the Fullest (Experience)",
    desc: "Mai freely shoots stunning photographs across misty pine forests and morning coffee shops with a professional camera, with zero storage burden or financial guilt.",
    phoneHeader: "Trip in Progress",
    mockupHTML: `
      <div class="mockup-step-content">
        <span class="mockup-badge">Step 4 • Pure Enjoyment</span>
        <div style="border-radius:14px; overflow:hidden; height:170px; margin-bottom:12px; border:1px solid #F4C8D6;">
          <img src="assets/hero_camera.jpg" style="width:100%; height:100%; object-fit:cover;" alt="Dalat photography trip">
        </div>
        <div style="font-size:0.82rem; color:#6C3346; text-align:center; font-style:italic;">
          “Only need it for a weekend? Enjoy the best gear without the burden of ownership!”
        </div>
      </div>
    `
  },
  {
    step: 5,
    title: "5. Safe Return & Condition Verification (Return)",
    desc: "After 3 wonderful days, Mai meets the lender on schedule. The lender opens Maven's comparison tool to inspect the camera against the initial check-in photos: spotless and complete.",
    phoneHeader: "Return & Inspection",
    mockupHTML: `
      <div class="mockup-step-content">
        <span class="mockup-badge">Step 5 • Smart Comparison</span>
        <div class="mockup-card-preview">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="color:#2E7D32; font-weight:bold;">✓</span>
            <span style="font-size:0.85rem; font-weight:600; color:#3E0F1F;">Body & Lens: Flawless</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="color:#2E7D32; font-weight:bold;">✓</span>
            <span style="font-size:0.85rem; font-weight:600; color:#3E0F1F;">2 Batteries & Charger: Returned</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="color:#2E7D32; font-weight:bold;">✓</span>
            <span style="font-size:0.85rem; font-weight:600; color:#3E0F1F;">64GB SD Card: Clean</span>
          </div>
        </div>
        <div style="background:#E8F5E9; color:#2E7D32; border-radius:10px; padding:8px; font-size:0.8rem; font-weight:700; text-align:center; margin-top:auto;">
          Lender clicked: “Item returned in perfect condition”
        </div>
      </div>
    `
  },
  {
    step: 6,
    title: "6. Instant Escrow Release & Mutual Review (Payout)",
    desc: "Immediately upon sign-off, Maven releases 100% of the $75 deposit back to Mai. The $24 rental earnings are deposited to the lender, and both exchange 5-star reviews.",
    phoneHeader: "Transaction Complete",
    mockupHTML: `
      <div class="mockup-step-content" style="text-align:center;">
        <span class="mockup-badge" style="background:#2E7D32;">Step 6 • 100% Success</span>
        <div style="width:52px; height:52px; border-radius:50%; background:#E8F5E9; color:#2E7D32; display:flex; align-items:center; justify-content:center; font-size:1.8rem; margin:8px auto 12px;">✓</div>
        <h5 style="font-size:1.05rem; color:#3E0F1F; margin-bottom:4px;">$75.00 Deposit Refunded</h5>
        <div style="font-size:0.8rem; color:#6C3346; margin-bottom:14px;">Lender received $24.00 passive income</div>
        <div style="background:#FFE6EE; border-radius:12px; padding:10px; border:1px solid #F4C8D6;">
          <div style="color:#8E2847; font-weight:700; font-size:0.85rem;">⭐️⭐️⭐️⭐️⭐️ (5.0)</div>
          <div style="font-size:0.76rem; color:#6C3346; margin-top:3px;">“Mai took exceptional care of the gear. Returned on time!”</div>
        </div>
      </div>
    `
  }
];

let currentStoryStep = 0;
let storyTimer = null;
let isStoryPlaying = true;
const stepDuration = 5500; // 5.5s per step
let progressStartTime = 0;
let progressAnimFrame = null;

function initStoryPlayer() {
  renderStoryStep(0);
  startStoryAutoPlay();

  // Play/Pause button
  const playBtn = document.getElementById('storyPlayPauseBtn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isStoryPlaying) {
        pauseStory();
        playBtn.innerHTML = '▶';
      } else {
        playStory();
        playBtn.innerHTML = '❚❚';
      }
    });
  }

  // Click on stepper items
  const stepItems = document.querySelectorAll('.story-step-item');
  stepItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      pauseStory();
      if (playBtn) playBtn.innerHTML = '▶';
      renderStoryStep(index);
    });
  });
}

function renderStoryStep(index) {
  currentStoryStep = index;
  const data = storyStepsData[index];
  if (!data) return;

  // Update step items active state
  const stepItems = document.querySelectorAll('.story-step-item');
  stepItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update simulated phone mockup
  const phoneHeader = document.getElementById('phoneHeaderTitle');
  const phoneBody = document.getElementById('phoneDynamicBody');
  if (phoneHeader) phoneHeader.textContent = data.phoneHeader;
  if (phoneBody) phoneBody.innerHTML = data.mockupHTML;
}

function startStoryAutoPlay() {
  isStoryPlaying = true;
  runStepTimer();
}

function runStepTimer() {
  if (!isStoryPlaying) return;
  progressStartTime = Date.now();
  updateProgressBar();

  storyTimer = setTimeout(() => {
    let nextStep = (currentStoryStep + 1) % storyStepsData.length;
    renderStoryStep(nextStep);
    runStepTimer();
  }, stepDuration);
}

function updateProgressBar() {
  if (!isStoryPlaying) return;
  const progressBar = document.getElementById('storyTimerProgress');
  if (!progressBar) return;

  const elapsed = Date.now() - progressStartTime;
  const percentage = Math.min(100, (elapsed / stepDuration) * 100);
  progressBar.style.width = `${percentage}%`;

  if (percentage < 100 && isStoryPlaying) {
    progressAnimFrame = requestAnimationFrame(updateProgressBar);
  }
}

function pauseStory() {
  isStoryPlaying = false;
  clearTimeout(storyTimer);
  cancelAnimationFrame(progressAnimFrame);
}

function playStory() {
  isStoryPlaying = true;
  runStepTimer();
}

/* ==========================================================================
   3. Interactive Savings & Earnings Calculator (English Edition)
   ========================================================================== */
const calculatorCatalog = {
  renter: [
    { id: 'fuji_cam', name: '📷 Fujifilm X100V Premium Camera', buyPrice: 850, rentPerDay: 8, deposit: 75 },
    { id: 'camping_tent', name: '🏕️ Glamping Bell Tent & Outdoor Stove Set', buyPrice: 450, rentPerDay: 6, deposit: 50 },
    { id: 'gala_dress', name: '👗 Haute Couture Designer Evening Gown', buyPrice: 420, rentPerDay: 10, deposit: 40 },
    { id: 'vr_headset', name: '🎮 Meta Quest 3 VR Headset & Controllers', buyPrice: 690, rentPerDay: 8, deposit: 70 },
    { id: 'cinema_projector', name: '🎬 Wireless 4K Mini Cinema Projector', buyPrice: 550, rentPerDay: 7, deposit: 60 }
  ],
  lender: [
    { id: 'fuji_cam', name: '📷 Mirrorless / Vintage Camera Gear', rentPerDay: 8 },
    { id: 'camping_tent', name: '🏕️ Outdoor & Glamping Equipment', rentPerDay: 6 },
    { id: 'gala_dress', name: '👗 Designer Dresses & Gala Attire', rentPerDay: 10 },
    { id: 'vr_headset', name: '🎮 Gaming Gear & VR Headsets', rentPerDay: 8 },
    { id: 'cinema_projector', name: '🎬 Projectors & Audio Equipment', rentPerDay: 7 }
  ]
};

let activeCalcMode = 'renter'; // 'renter' or 'lender'

function initCalculator() {
  const tabRenter = document.getElementById('calcTabRenter');
  const tabLender = document.getElementById('calcTabLender');
  const itemSelect = document.getElementById('calcItemSelect');
  const daysSlider = document.getElementById('calcDaysSlider');
  const daysValue = document.getElementById('calcDaysValue');
  const sliderLabel = document.getElementById('calcSliderLabel');

  if (!tabRenter || !tabLender || !itemSelect || !daysSlider) return;

  function populateOptions(mode) {
    itemSelect.innerHTML = '';
    calculatorCatalog[mode].forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.name;
      itemSelect.appendChild(opt);
    });
  }

  function updateCalculator() {
    const selectedId = itemSelect.value;
    const days = parseInt(daysSlider.value, 10);
    daysValue.textContent = `${days} day${days > 1 ? 's' : ''}`;

    if (activeCalcMode === 'renter') {
      const item = calculatorCatalog.renter.find(i => i.id === selectedId) || calculatorCatalog.renter[0];
      const totalRent = item.rentPerDay * days;
      const savings = Math.max(0, item.buyPrice - totalRent);
      const savePercent = Math.round((savings / item.buyPrice) * 100);

      document.getElementById('calcResultBadge').textContent = 'Your Net Financial Savings';
      document.getElementById('calcResultNumber').textContent = `$${savings.toLocaleString('en-US')}`;
      document.getElementById('calcResultSub').innerHTML = `You save <strong>${savePercent}%</strong> compared to buying retail!`;

      document.getElementById('calcDetailLeft').innerHTML = `Retail purchase cost:<br><span style="text-decoration:line-through; font-weight:700;">$${item.buyPrice.toLocaleString('en-US')}</span>`;
      document.getElementById('calcDetailRight').innerHTML = `Rental cost on Maven:<br><strong style="color:#8E2847;">$${totalRent.toLocaleString('en-US')}</strong>`;
    } else {
      const item = calculatorCatalog.lender.find(i => i.id === selectedId) || calculatorCatalog.lender[0];
      const monthlyIncome = item.rentPerDay * days;
      const yearlyIncome = monthlyIncome * 12;

      document.getElementById('calcResultBadge').textContent = 'Estimated Passive Earnings';
      document.getElementById('calcResultNumber').textContent = `$${monthlyIncome.toLocaleString('en-US')}/mo`;
      document.getElementById('calcResultSub').innerHTML = `Turn idle items into <strong>$${yearlyIncome.toLocaleString('en-US')}/year</strong>!`;

      document.getElementById('calcDetailLeft').innerHTML = `Daily rental rate:<br><strong>$${item.rentPerDay.toLocaleString('en-US')}/day</strong>`;
      document.getElementById('calcDetailRight').innerHTML = `Loss/Theft Risk:<br><strong style="color:#2E7D32;">0% (100% Escrow Deposit)</strong>`;
    }
  }

  tabRenter.addEventListener('click', () => {
    activeCalcMode = 'renter';
    tabRenter.classList.add('active');
    tabLender.classList.remove('active');
    sliderLabel.textContent = 'Days you need to use this item:';
    daysSlider.min = '1';
    daysSlider.max = '14';
    daysSlider.value = '3';
    populateOptions('renter');
    updateCalculator();
  });

  tabLender.addEventListener('click', () => {
    activeCalcMode = 'lender';
    tabLender.classList.add('active');
    tabRenter.classList.remove('active');
    sliderLabel.textContent = 'Days available for rent per month:';
    daysSlider.min = '2';
    daysSlider.max = '20';
    daysSlider.value = '6';
    populateOptions('lender');
    updateCalculator();
  });

  itemSelect.addEventListener('change', updateCalculator);
  daysSlider.addEventListener('input', updateCalculator);

  // Initialize with renter
  populateOptions('renter');
  updateCalculator();
}

/* ==========================================================================
   4. Role Toggle Switcher (Renter / Lender Perspective)
   ========================================================================== */
function initRoleToggle() {
  const roleRenterBtn = document.getElementById('roleRenterBtn');
  const roleLenderBtn = document.getElementById('roleLenderBtn');
  const renterCard = document.getElementById('valueCardRenter');
  const lenderCard = document.getElementById('valueCardLender');

  if (!roleRenterBtn || !roleLenderBtn) return;

  function setRole(role) {
    if (role === 'renter') {
      roleRenterBtn.classList.add('active');
      roleLenderBtn.classList.remove('active');
      if (renterCard && lenderCard) {
        renterCard.style.borderColor = 'var(--c-wine)';
        renterCard.style.boxShadow = 'var(--shadow-lg)';
        lenderCard.style.borderColor = 'var(--border-delicate)';
        lenderCard.style.boxShadow = 'var(--shadow-sm)';
      }
    } else {
      roleLenderBtn.classList.add('active');
      roleRenterBtn.classList.remove('active');
      if (renterCard && lenderCard) {
        lenderCard.style.borderColor = 'var(--c-wine)';
        lenderCard.style.boxShadow = 'var(--shadow-lg)';
        renterCard.style.borderColor = 'var(--border-delicate)';
        renterCard.style.boxShadow = 'var(--shadow-sm)';
      }
    }
  }

  roleRenterBtn.addEventListener('click', () => setRole('renter'));
  roleLenderBtn.addEventListener('click', () => setRole('lender'));

  // Section 5 tabs
  const tabRenterSec5 = document.getElementById('tabValueRenter');
  const tabLenderSec5 = document.getElementById('tabValueLender');
  if (tabRenterSec5 && tabLenderSec5) {
    tabRenterSec5.addEventListener('click', () => {
      tabRenterSec5.classList.add('active');
      tabLenderSec5.classList.remove('active');
      setRole('renter');
    });
    tabLenderSec5.addEventListener('click', () => {
      tabLenderSec5.classList.add('active');
      tabRenterSec5.classList.remove('active');
      setRole('lender');
    });
  }
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other items
      faqItems.forEach(other => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. Interactive Modals (Rent Simulation & Listing Simulation)
   ========================================================================== */
function initModals() {
  const rentModal = document.getElementById('rentModal');
  const listModal = document.getElementById('listModal');

  // Trigger buttons
  document.querySelectorAll('[data-open-modal="rent"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (rentModal) rentModal.classList.add('open');
    });
  });

  document.querySelectorAll('[data-open-modal="list"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (listModal) listModal.classList.add('open');
    });
  });

  // Close buttons
  document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(element => {
    element.addEventListener('click', (e) => {
      if (e.target === element || e.target.classList.contains('modal-close-btn')) {
        if (rentModal) rentModal.classList.remove('open');
        if (listModal) listModal.classList.remove('open');
      }
    });
  });

  // Prevent closing when clicking modal window
  document.querySelectorAll('.modal-window').forEach(win => {
    win.addEventListener('click', e => e.stopPropagation());
  });

  // Handle simulated form submissions
  const rentForm = document.getElementById('rentSimulationForm');
  if (rentForm) {
    rentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('✦ Demo Simulation Successful!\n\nYour rental request has been forwarded to the verified lender. Maven is holding your deposit securely in escrow.');
      if (rentModal) rentModal.classList.remove('open');
    });
  }

  const listForm = document.getElementById('listSimulationForm');
  if (listForm) {
    listForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('✦ Demo Listing Created!\n\nYour item has been published to Maven! You will receive instant notifications whenever a verified renter requests to book.');
      if (listModal) listModal.classList.remove('open');
    });
  }
}
