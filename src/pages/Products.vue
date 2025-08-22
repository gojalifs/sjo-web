<template>
  <div class="min-h-screen bg-white text-slate-800">
    <header class="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <a href="/" class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5"><path d="M9 10a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Zm12 0a3 3 0 1 0-6 0v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a3 3 0 1 0-6 0v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1Z"/></svg>
          </a>
          <span class="font-extrabold tracking-tight text-xl">Semua Produk</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="hidden md:block text-sm text-slate-500">Infinite Scroll</div>
          <button @click="mobileOpen = true" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border hover:bg-rose-50" aria-label="Buka menu" aria-controls="mobile-drawer" :aria-expanded="mobileOpen ? 'true' : 'false'">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile side navigation drawer & overlay (Products page) -->
    <transition name="fade">
      <div v-if="mobileOpen" class="fixed inset-0 z-50 md:hidden" @click.self="mobileOpen = false">
        <div class="absolute inset-0 bg-black/40"></div>
        <aside id="mobile-drawer" class="absolute inset-y-0 right-0 w-72 max-w-[85%] bg-white shadow-xl ring-1 ring-rose-100 p-4 flex flex-col">
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
              <li><a @click="mobileOpen = false" href="/" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Beranda</a></li>
              <li><a @click="mobileOpen = false" href="/#koleksi" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Koleksi</a></li>
              <li><a @click="mobileOpen = false" href="/#promo" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Promo</a></li>
              <li><a @click="mobileOpen = false" href="/#testimoni" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Testimoni</a></li>
              <li><a @click="mobileOpen = false" href="/#faq" class="block rounded-lg px-3 py-2 hover:bg-rose-50">FAQ</a></li>
              <li class="pt-2 mt-2 border-t"><a @click="mobileOpen = false" href="/products" class="block rounded-lg px-3 py-2 hover:bg-rose-50">Semua Produk</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </transition>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Koleksi Kacamata</h1>
          <p class="text-slate-600">Scroll ke bawah untuk memuat lebih banyak.</p>
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
        <article v-for="p in visibleProducts" :key="p.id" class="group rounded-2xl bg-white ring-1 ring-rose-100 shadow-sm overflow-hidden flex flex-col">
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
              <button class="inline-flex items-center rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white hover:bg-rose-700">
                Tambah
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- Sentinel for IntersectionObserver -->
      <div ref="sentinel" class="h-10"></div>

      <div class="mt-6 flex justify-center" v-if="isLoading">
        <div class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" opacity=".25"/><path d="M22 12a10 10 0 0 1-10 10"/></svg>
          Memuat...
        </div>
      </div>

      <div class="mt-6 text-center text-sm text-slate-500" v-if="noMore">
        Sudah menampilkan semua produk.
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, reactive, ref, watch } from 'vue'

type Product = {
  id: number
  name: string
  price: number
  image: string
  color: string
  material: string
  badge?: string
  rating: number
  category: string
}

// Categories and sorting
const categories = ['Pria', 'Wanita', 'Unisex', 'Sport']
const selectedCategory = ref<'all' | string>('all')
const sortBy = ref<'popular' | 'price-asc' | 'price-desc'>('popular')

// Mobile side navigation state
const mobileOpen = ref(false)
window.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') mobileOpen.value = false
})

// Generate a dummy eyewear collection
const baseImages = [
  'https://images.unsplash.com/photo-1512427691650-994c3f2c1ad5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop'
]

function makeProduct(i: number): Product {
  const cat = categories[i % categories.length]
  return {
    id: i + 1,
    name: `Frame ${i + 1}`,
    price: 250000 + (i % 12) * 50000,
    image: baseImages[i % baseImages.length],
    color: ['Hitam', 'Cokelat', 'Rose', 'Transparan'][i % 4],
    material: ['Acetat', 'TR90', 'Metal'][i % 3],
    badge: i % 9 === 0 ? 'Baru' : undefined,
    rating: 4 + ((i % 10) / 10),
    category: cat
  }
}

const allProducts = reactive<Product[]>(Array.from({ length: 120 }, (_, i) => makeProduct(i)))

// Filtering and sorting
const processed = computed(() => {
  let list = allProducts as Product[]
  if (selectedCategory.value !== 'all') {
    list = list.filter(p => p.category === selectedCategory.value)
  }
  if (sortBy.value === 'price-asc') list = [...list].sort((a,b) => a.price - b.price)
  else if (sortBy.value === 'price-desc') list = [...list].sort((a,b) => b.price - a.price)
  else list = [...list] // popular: keep as-is
  return list
})

// Infinite scroll state
const visibleProducts = ref<Product[]>([])
const pageSize = 12
let page = 0
const isLoading = ref(false)
const noMore = ref(false)
const sentinel = ref<HTMLDivElement | null>(null)
let observer: IntersectionObserver | null = null

function loadMore() {
  if (isLoading.value || noMore.value) return
  isLoading.value = true
  // Simulate async delay
  setTimeout(() => {
    const start = page * pageSize
    const end = start + pageSize
    const slice = processed.value.slice(start, end)
    if (slice.length === 0) {
      noMore.value = true
    } else {
      visibleProducts.value.push(...slice)
      page += 1
    }
    isLoading.value = false
  }, 300)
}

function resetAndLoad() {
  page = 0
  noMore.value = false
  visibleProducts.value = []
  loadMore()
}

onMounted(() => {
  resetAndLoad()
  observer = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      loadMore()
    }
  }, { rootMargin: '200px' })
  if (sentinel.value) observer.observe(sentinel.value)
})

onBeforeUnmount(() => {
  if (observer && sentinel.value) observer.unobserve(sentinel.value)
  observer = null
})

watch([selectedCategory, sortBy], () => {
  resetAndLoad()
})

function formatIDR(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n)
}
</script>

<style scoped>
/**** No extra styles; using Tailwind CSS utilities ****/
</style>
