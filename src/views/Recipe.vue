<template>
  <div class="page-container">
    <!-- 上部：關鍵字搜尋 -->
    <header class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="輸入關鍵字..."
        @keyup.enter="performSearch"
      />
      <button @click="performSearch">搜尋</button>
    </header>

    <!-- 中部：搜尋結果 -->
    <main class="search-results">
      <div v-if="loading" class="loading">搜尋中...</div>
      <div v-else-if="results.length === 0" class="no-results">無搜尋結果</div>
      <div v-else class="results-grid">
        <div v-for="(result, index) in results" :key="index" class="result-item">
          <img :src="result.thumbnail" alt="Result thumbnail" />
          <h3>{{ result.title }}</h3>
        </div>
      </div>
    </main>

    <!-- 下部：上傳圖片按鈕 -->
    <footer class="upload-section">
      <FileUpload
        name="images"
        url="/api/upload"
        :multiple="true"
        accept="image/*"
        @upload="onUploadSuccess"
      >
        <template #content>
          <button>上傳圖片</button>
        </template>
      </FileUpload>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FileUpload from 'primevue/fileupload'

const searchQuery = ref('')
const results = ref([])
const loading = ref(false)

const performSearch = () => {
  loading.value = true
  // 模擬搜尋結果
  setTimeout(() => {
    results.value = [
      { title: '圖片 1', thumbnail: 'https://via.placeholder.com/150' },
      { title: '圖片 2', thumbnail: 'https://via.placeholder.com/150' },
      { title: '圖片 3', thumbnail: 'https://via.placeholder.com/150' },
    ]
    loading.value = false
  }, 1000)
}

const onUploadSuccess = () => {
  alert('圖片上傳成功！')
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.search-bar {
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  background-color: #646cff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.search-results {
  width: 100%;
  max-width: 800px;
  min-height: 300px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  -webkit-text-fill-color: black;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  text-align: center;
}

.result-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.upload-section {
  margin-top: 16px;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
}

.loading,
.no-results {
  text-align: center;
  font-size: 1.2em;
  color: #666;
}
</style>
