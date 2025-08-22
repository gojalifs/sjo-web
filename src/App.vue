<template>
  <div class="min-h-screen bg-white text-slate-800 overflow-x-hidden">
    <div class="w-full bg-rose-100 text-rose-900 text-sm text-center py-2">
      Gratis lensa standar untuk pembelian frame tertentu • Pengiriman se-Indonesia
    </div>

    <header class="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
              <path d="M9 10a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Zm12 0a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Z"/>
            </svg>
          </span>
          <span class="font-extrabold tracking-tight text-xl">SoftRed Optics</span>
        </div>
        <ul class="hidden md:flex items-center gap-8 font-medium">
          <li><a href="#koleksi" class="hover:text-rose-600">Koleksi</a></li>
          <li><a href="#promo" class="hover:text-rose-600">Promo</a></li>
          <li><a href="#testimoni" class="hover:text-rose-600">Testimoni</a></li>
          <li><a href="#faq" class="hover:text-rose-600">FAQ</a></li>
        </ul>
        <div class="flex items-center gap-3">
          <button class="relative inline-flex items-center rounded-xl border px-3.5 py-2 text-sm font-semibold hover:bg-rose-50 btn-press">
            <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            Cari
          </button>
          <button class="relative inline-flex items-center rounded-xl bg-rose-500 px-3.5 py-2 text-sm font-semibold text-white hover:bg-rose-600 shadow-sm btn-press">
            <svg class="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
            Keranjang ({{ cartCount }})
          </button>
          <!-- Mobile menu toggle (top-right on small screens) -->
          <button @click="mobileOpen = true" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border hover:bg-rose-50 btn-press" aria-label="Buka menu" aria-controls="mobile-drawer" :aria-expanded="mobileOpen ? 'true' : 'false'">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile side navigation drawer & overlay -->
    <transition name="fade">
      <div v-if="mobileOpen" class="fixed inset-0 z-50 md:hidden" @click.self="mobileOpen = false">
        <div class="absolute inset-0 bg-black/40"></div>
        <aside id="mobile-drawer" class="absolute inset-y-0 right-0 w-72 max-w-[85%] bg-white shadow-xl ring-1 ring-rose-100 p-4 flex flex-col translate-x-0 transition-transform">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4"><path d="M9 10a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Zm12 0a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Z"/></svg>
              </span>
              <span class="font-bold">SoftRed Optics</span>
            </div>
            <button @click="mobileOpen = false" class="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-rose-50" aria-label="Tutup menu">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <nav class="mt-4">
            <ul class="space-y-1 text-sm font-medium">
              <li><a @click="mobileOpen = false" href="#koleksi" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Koleksi</a></li>
              <li><a @click="mobileOpen = false" href="#promo" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Promo</a></li>
              <li><a @click="mobileOpen = false" href="#testimoni" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Testimoni</a></li>
              <li><a @click="mobileOpen = false" href="#faq" class="block rounded-lg px-3 py-2 hover:bg-rose-50">FAQ</a></li>
              <li class="pt-2 mt-2 border-t"><a @click="mobileOpen = false" href="/products" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Semua Produk</a></li>
            </ul>
          </nav>
          <div class="mt-auto pt-4">
            <a :href="waLink" target="_blank" class="inline-flex items-center gap-2 rounded-xl bg-green-500 px-3 py-2 text-white font-semibold hover:bg-green-600">
              <svg viewBox="0 0 32 32" class="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M19.11 17.24c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.21-.61.07-.29-.14-1.22-.45-2.33-1.43-.86-.75-1.44-1.67-1.61-1.95-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.85 4.28 2.85 1.23 2.85.82 3.36.78.52-.03 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16 3.06c-7.14 0-12.94 5.8-12.94 12.94 0 2.28.6 4.5 2.086 7.594L3 29l6.73-1.76A12.88 12.88 0 0 0 16 28c7.14 0 12.94-5.8 12.94-12.94S23.14 3.06 16 3.06zM16 26.39c-2.2 0-4.28-.64-6.06-1.85l-.44-.28-3.61.95.96-3.51-.29-.45A10.66 10.66 0 1 1 26.66 16 10.67 10.67 0 0 1 16 26.39z"/></svg>
              WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </transition>

    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-rose-200 blur-3xl opacity-60 floaty" :style="blobLeftStyle"></div>
        <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-300 blur-3xl opacity-60 floaty" :style="blobRightStyle"></div>
      </div>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-rose-700 text-xs font-medium ring-1 ring-rose-200">
            <span class="h-2 w-2 rounded-full bg-rose-500"></span> Koleksi Baru 2025
          </span>
          <h1 v-reveal="'up'" class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Lihat Dunia Lebih <span class="text-rose-600">Jelas</span> & Lebih <span class="text-rose-600">Gaya</span>
          </h1>
          <p v-reveal="'up'" class="mt-4 text-lg text-slate-600 max-w-prose">
            Toko kacamata modern dengan rangka ringan, lensa anti radiasi, dan desain minimalis. Pilih dari ratusan frame soft red aesthetic yang nyaman dipakai seharian.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#koleksi" class="inline-flex items-center rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 btn-press">Belanja Sekarang</a>
            <a href="#konsultasi" class="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-white btn-press">
              Konsultasi Gratis
            </a>
          </div>
          <dl v-reveal="'up'" class="mt-10 grid grid-cols-3 gap-6 text-center">
            <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100">
              <dt class="text-xs text-slate-500">Garansi</dt>
              <dd class="mt-1 text-xl font-bold">365 Hari</dd>
            </div>
            <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100">
              <dt class="text-xs text-slate-500">Ulasan</dt>
              <dd class="mt-1 text-xl font-bold">4.9/5</dd>
            </div>
            <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100">
              <dt class="text-xs text-slate-500">Pengiriman</dt>
              <dd class="mt-1 text-xl font-bold">Gratis</dd>
            </div>
          </dl>
        </div>
        <div v-reveal="'zoom'" class="relative">
          <div class="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl ring-1 ring-rose-100 parallax-wc" :style="heroParallaxStyle">
            <img :src="heroImage" alt="Eyewear hero" class="h-full w-full object-cover">
          </div>
          <div class="absolute -bottom-5 -right-5 hidden md:block">
            <div class="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-rose-100">
              <p class="text-sm font-semibold">Frame Favorit Minggu Ini</p>
              <p class="text-xs text-slate-500">Daphne Matte Rose • 120 terjual</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="promo" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="relative mb-6">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div class="mx-auto max-w-7xl">
            <div class="h-16 sm:h-20 rounded-2xl bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 opacity-80 parallax-wc"
                 :style="promoParallaxStyle"></div>
          </div>
        </div>
        <div class="sr-only">Banner promo</div>
      </div>

      <div class="grid md:grid-cols-3 gap-4">
        <div v-for="h in highlights" :key="h.title" v-reveal="'up'" class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100">
          <div class="flex items-start gap-4">
            <div class="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 inline-flex items-center justify-center">
              <Icon :name="h.icon" />
            </div>
            <div>
              <h3 class="font-semibold">{{ h.title }}</h3>
              <p class="text-sm text-slate-600 mt-1">{{ h.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="koleksi" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Koleksi Pilihan</h2>
          <p class="text-slate-600">Semua harga termasuk lensa standar. Upgrade lensa tersedia.</p>
        </div>
        <div class="flex gap-2">
          <select v-model="selectedCategory" class="rounded-xl border px-3 py-2 text-sm">
            <option value="all">Semua</option>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
          <select v-model="sortBy" class="rounded-xl border px-3 py-2 text-sm">
            <option value="popular">Terpopuler</option>
            <option value="price-asc">Harga: Rendah → Tinggi</option>
            <option value="price-desc">Harga: Tinggi → Rendah</option>
          </select>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <article v-for="p in filteredProducts" :key="p.id" v-reveal="'up'" class="group rounded-2xl bg-white ring-1 ring-rose-100 shadow-sm overflow-hidden flex flex-col">
          <div class="relative">
            <img :src="p.image" :alt="p.name" class="aspect-square w-full object-cover transition group-hover:scale-[1.02]" />
            <span v-if="p.badge" class="absolute left-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
              {{ p.badge }}
            </span>
          </div>
          <div class="flex flex-1 flex-col p-4">
            <h3 class="font-semibold">{{ p.name }}</h3>
            <p class="mt-1 text-sm text-slate-600">{{ p.color }} • {{ p.material }}</p>
            <div class="mt-3 flex items-center gap-1" aria-label="Rating">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" :class="i <= Math.round(p.rating) ? 'fill-rose-500' : 'fill-rose-100'"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.169L12 18.896 4.664 23.167l1.402-8.169L.132 9.21l8.2-1.192z"/></svg>
              <span class="ml-1 text-xs text-slate-500">{{ p.rating.toFixed(1) }}</span>
            </div>
            <div class="mt-auto pt-4 flex items-center justify-between">
              <div class="font-extrabold text-lg">{{ formatIDR(p.price) }}</div>
              <button @click="addToCart(p)" class="inline-flex items-center rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-700 btn-press">
                Tambah
              </button>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-10 text-center">
        <a href="/products" class="inline-block rounded-xl border px-5 py-3 font-semibold hover:bg-white btn-press">
          Lihat Lebih Banyak:
        </a>
      </div>
    </section>

    <section id="testimoni" class="bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-center">Apa Kata Mereka</h2>
        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <blockquote v-for="t in testimonials" :key="t.name" v-reveal="'up'" class="rounded-2xl border bg-rose-50 p-6 ring-1 ring-rose-100">
            <p class="text-slate-700">“{{ t.quote }}”</p>
            <footer class="mt-4 flex items-center gap-3">
              <img :src="t.avatar" alt="avatar" class="h-10 w-10 rounded-full object-cover"/>
              <div>
                <div class="font-semibold">{{ t.name }}</div>
                <div class="text-xs text-slate-500">{{ t.role }}</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section id="faq" class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-center">Pertanyaan Umum</h2>
      <div class="mt-8 divide-y rounded-2xl border bg-white ring-1 ring-rose-100">
        <details v-for="(f, idx) in faqs" :key="idx" v-reveal="'up'" class="group p-6 open:bg-rose-50">
          <summary class="flex cursor-pointer list-none items-center justify-between font-semibold">
            <span>{{ f.q }}</span>
            <span class="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700 transition group-open:rotate-45">+</span>
          </summary>
          <p class="mt-2 text-slate-600">{{ f.a }}</p>
        </details>
      </div>
    </section>

    <section id="konsultasi" class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-rose-200 blur-3xl opacity-60 floaty"></div>
      </div>
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Butuh Bantuan Pilih Lensa?</h2>
        <p class="mt-2 text-slate-600">Tim optician kami siap membantu menentukan ukuran dan tipe lensa terbaik untuk aktivitasmu.</p>
        <div class="mt-6 flex justify-center gap-3">
          <a :href="waLink" target="_blank" class="inline-flex items-center rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 btn-press">Chat WhatsApp</a>
          <a href="#" class="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-white btn-press">Booking Pemeriksaan</a>
        </div>
      </div>
    </section>

    <footer class="border-t bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-2">
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M9 10a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Zm12 0a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Z"/></svg>
            </span>
            <span class="font-extrabold tracking-tight text-lg">SoftRed Optics</span>
          </div>
          <p class="mt-3 text-sm text-slate-600">Jln. Mawar No. 12, Karawang • Buka setiap hari 10.00–21.00 WIB</p>
        </div>
        <div>
          <h4 class="font-semibold">Layanan</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>Periksa Mata</li>
            <li>Custom Lensa</li>
            <li>Perbaikan & Penyetelan</li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold">Bantuan</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>Pengiriman</li>
            <li>Garansi</li>
            <li>Retur & Tukar</li>
          </ul>
        </div>

        <!--Follow Us Section-->
        <div>
          <h4 class="font-semibold">Ikuti Kami</h4>
          <div class="mt-3 flex gap-3">
            <a href="#" aria-label="Instagram" class="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-rose-50">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.6 0-4.8.1-1 .1-1.5.2-1.8.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.8-.4 1.8C3.1 10 3.1 10.4 3.1 12s0 2 .1 3.2c.1 1 .2 1.5.4 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.2.8.3 1.8.4 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1-.1 1.5-.2 1.8-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.8.4-1.8.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1-.2-1.5-.4-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.8-.3-1.8-.4-1.2-.1-1.6-.1-4.8-.1zM12 6.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zM17.6 6.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
              </svg>
            </a>
            <a href="#" aria-label="TikTok" class="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-rose-50">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M21 8.1c-2 0-3.8-.8-5.1-2.1V16a6 6 0 1 1-6-6c.3 0 .6 0 .9.1V12a3.5 3.5 0 1 0 3.5 3.5V2.8c1 .9 2.3 1.6 3.7 1.8.6.1 1.2.1 1.9.1v3.4c-.3 0-.6 0-.9 0z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" class="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-rose-50">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.5 5.1 12 5.1 12 5.1s-6.5 0-7.8.3c-.9.2-1.6.9-1.8 1.8C2.1 8.5 2.1 12 2.1 12s0 3.5.3 4.8c.2.9.9 1.6 1.8 1.8 1.3.3 7.8.3 7.8.3s6.5 0 7.8-.3c.9-.2 1.6-.9 1.8-1.8.3-1.3.3-4.8.3-4.8s0-3.5-.3-4.8zM10 15.1V8.9l5.2 3.1L10 15.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t py-6 text-center text-xs text-slate-500">© 2025 SoftRed Optics. All rights reserved.</div>
    </footer>

    <transition name="fade">
      <div v-if="toast" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div class="rounded-xl bg-rose-600 px-4 py-2 text-white shadow-lg">
          {{ toast }}
        </div>
      </div>
    </transition>

    <a :href="waLink" target="_blank" rel="noopener"
       class="fixed bottom-6 right-6 z-50 h-12 w-12 grid place-items-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 btn-press"
       aria-label="Hubungi via WhatsApp">
      <svg viewBox="0 0 32 32" class="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.24c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.21-.61.07-.29-.14-1.22-.45-2.33-1.43-.86-.75-1.44-1.67-1.61-1.95-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2 3.05 4.85 4.28 2.85 1.23 2.85.82 3.36.78.52-.03 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16 3.06c-7.14 0-12.94 5.8-12.94 12.94 0 2.28.6 4.5 2.086 7.594L3 29l6.73-1.76A12.88 12.88 0 0 0 16 28c7.14 0 12.94-5.8 12.94-12.94S23.14 3.06 16 3.06zM16 26.39c-2.2 0-4.28-.64-6.06-1.85l-.44-.28-3.61.95.96-3.51-.29-.45A10.66 10.66 0 1 1 26.66 16 10.67 10.67 0 0 1 16 26.39z"/>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Icon from './components/Icon.vue'

type Material = 'Acetate' | 'Titanium' | 'TR90'
type Category = 'Pria' | 'Wanita' | 'Unisex' | 'Blue Light' | 'Sunglasses'

interface Product { id:number; name:string; price:number; material:Material; color:string; category:Category; rating:number; image:string; badge?:string }
interface Testimonial { name:string; role:string; quote:string; avatar:string }

// Eyewear-related image pools (Unsplash IDs) for randomness on each load
const eyewearHeroImages = [
  'https://images.unsplash.com/photo-1514756331096-242fdeb70d6b?q=80&w=1600&auto=format&fit=crop', // person with glasses closeup
  'https://images.unsplash.com/photo-1516826957135-cbf43f0273a0?q=80&w=1600&auto=format&fit=crop', // eyewear on table
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', // sunglasses lifestyle
  'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop', // glasses on book
  'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600&auto=format&fit=crop'  // eyewear store
]
const eyewearProductImages = [
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556306535-abccb114ff56?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591311630200-238fb0ad9420?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1590351221410-8ab3e7dbf65d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556306535-672da6fbf49e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586297011627-2ef0e6f83fe6?q=80&w=1200&auto=format&fit=crop'
]
function randItem<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }

const heroImage = randItem(eyewearHeroImages)

const products = reactive<Product[]>([
  { id: 1, name: 'Daphne Matte Rose', price: 495000, material: 'Acetate', color: 'Soft Rose', category: 'Wanita', rating: 4.8, image: randItem(eyewearProductImages), badge: 'Baru' },
  { id: 2, name: 'Atlas Thin', price: 545000, material: 'Titanium', color: 'Silver', category: 'Pria', rating: 4.7, image: randItem(eyewearProductImages), badge: 'Favorit' },
  { id: 3, name: 'Noir Round', price: 425000, material: 'TR90', color: 'Black', category: 'Unisex', rating: 4.6, image: randItem(eyewearProductImages) },
  { id: 4, name: 'Solare UV400', price: 575000, material: 'Acetate', color: 'Brown', category: 'Sunglasses', rating: 4.9, image: randItem(eyewearProductImages) },
  { id: 5, name: 'Clarity BlueShield', price: 395000, material: 'TR90', color: 'Clear', category: 'Blue Light', rating: 4.5, image: randItem(eyewearProductImages) },
  { id: 6, name: 'Milo Rose Gold', price: 615000, material: 'Titanium', color: 'Rose Gold', category: 'Wanita', rating: 4.8, image: randItem(eyewearProductImages) },
  { id: 7, name: 'Fjord Minimal', price: 445000, material: 'TR90', color: 'Grey', category: 'Unisex', rating: 4.4, image: randItem(eyewearProductImages) },
  { id: 8, name: 'Soleil Matte', price: 535000, material: 'Acetate', color: 'Matte Brown', category: 'Sunglasses', rating: 4.7, image: randItem(eyewearProductImages) },
])

const testimonials = reactive<Testimonial[]>([
  { name: 'Alya Putri', role: 'Content Creator', quote: 'Frame-nya ringan dan nyaman, warna soft red-nya manis banget!', avatar: 'https://randomuser.me/api/portraits/women/17.jpg' },
  { name: 'Raka Pratama', role: 'Product Designer', quote: 'Pengiriman cepat, lensa blue light-nya bantu banget pas kerja lama di depan layar.', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { name: 'Siska Nur', role: 'Mahasiswa', quote: 'Harga terjangkau, banyak pilihan model minimalis.', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
])

const faqs = reactive([{ q:'Apakah harga sudah termasuk lensa?', a:'Ya, semua harga sudah termasuk lensa standar. Kamu dapat upgrade lensa sesuai kebutuhan dengan biaya tambahan.' },{ q:'Bagaimana cara mengetahui ukuran frame yang pas?', a:'Kamu bisa menghubungi kami untuk konsultasi gratis atau gunakan penggaris untuk mengukur PD (pupil distance) dan lebar wajah.' },{ q:'Apakah ada garansi?', a:'Ada, garansi 365 hari untuk cacat produksi. Penyetelan gratis di seluruh cabang kami.' }])

const highlights = reactive([{ title:'Lensa Anti Radiasi', desc:'Perlindungan dari sinar biru & UV untuk kerja nyaman seharian.', icon:'shield' as const },{ title:'Frame Ringan', desc:'Material TR90 & Titanium yang kokoh namun tetap ringan.', icon:'layers' as const },{ title:'Gratis Penyesuaian', desc:'Penyetelan hidung & templat agar pas di wajahmu.', icon:'user' as const }])

const toast = ref<string>('')
const cartCount = ref<number>(0)
const selectedCategory = ref<'all' | Category>('all')
const sortBy = ref<'popular' | 'price-asc' | 'price-desc'>('popular')

// Mobile side navigation state
const mobileOpen = ref(false)
// Close on Escape
window.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') mobileOpen.value = false
})

const categories = computed(() => Array.from(new Set(products.map(p => p.category))))
const filteredProducts = computed(() => {
  let list = products.slice()
  if (selectedCategory.value !== 'all') list = list.filter(p => p.category === selectedCategory.value)
  if (sortBy.value === 'price-asc') list.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price-desc') list.sort((a, b) => b.price - a.price)
  if (sortBy.value === 'popular') list.sort((a, b) => b.rating - a.rating)
  return list
})

function addToCart(p: Product) { cartCount.value += 1; showToast(`${p.name} ditambahkan ke keranjang`) }
function showToast(msg: string) { toast.value = msg; setTimeout(() => (toast.value = ''), 1800) }
function formatIDR(value: number) { return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value) }

const whatsappNumber = '6281234567890'
const whatsappMessage = 'Halo SoftRed Optics! Saya mau tanya ketersediaan frame.'
const waLink = computed(() => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`)

const vReveal = {
  mounted(el: HTMLElement, binding: any) {
    const variant = String(binding?.value || 'up')
    const base = 'reveal'
    const variantClass = variant === 'zoom' ? 'reveal-zoom'
                       : variant === 'left' ? 'reveal-left'
                       : variant === 'right' ? 'reveal-right'
                       : 'reveal'
    el.classList.add(base)
    if (variantClass !== 'reveal') el.classList.add(variantClass)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('reveal-show')
          io.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    io.observe(el)
  }
}

const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
const scrollY = ref(0)
let ticking = false
function onScroll() {
  if (prefersReduced) return
  const y = window.scrollY || window.pageYOffset
  if (!ticking) {
    window.requestAnimationFrame(() => { scrollY.value = y; ticking = false })
    ticking = true
  }
}
if (!prefersReduced) window.addEventListener('scroll', onScroll, { passive: true })

const heroParallaxStyle = computed(() => {
  if (prefersReduced) return {}
  const y = Math.min(scrollY.value, 500)
  return { transform: `translateY(${y * -0.08}px)` }
})
const blobLeftStyle = computed(() => {
  if (prefersReduced) return {}
  const y = Math.min(scrollY.value, 500)
  return { transform: `translateY(${y * -0.12}px)` }
})
const blobRightStyle = computed(() => {
  if (prefersReduced) return {}
  const y = Math.min(scrollY.value, 500)
  return { transform: `translateY(${y * -0.06}px)` }
})

const promoTop = ref(0)
const viewportH = ref(window.innerHeight || 800)
function measurePromo() {
  const el = document.getElementById('promo')
  if (el) {
    const rect = el.getBoundingClientRect()
    promoTop.value = rect.top + (window.scrollY || window.pageYOffset)
  }
  viewportH.value = window.innerHeight || viewportH.value
}
window.addEventListener('resize', () => { measurePromo() }, { passive: true })
measurePromo()
const promoParallaxStyle = computed(() => {
  if (prefersReduced) return {}
  const start = promoTop.value - viewportH.value
  const end = start + viewportH.value * 2
  const y = scrollY.value
  const progress = Math.min(1, Math.max(0, (y - start) / (end - start)))
  const amplitude = 140
  const offset = (progress - 0.5) * amplitude
  return { transform: `translateX(${offset.toFixed(1)}px)` }
})

</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>