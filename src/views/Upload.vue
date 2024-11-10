<script setup>
import { ref } from 'vue'

const uploadedFiles = ref([])
const previewUrls = ref([])

const handleFileUpload = (e) => {
  const target = e.target
  const files = target.files
  if (!files?.length) return

  const newFiles = Array.from(files)
  uploadedFiles.value = [...uploadedFiles.value, ...newFiles]

  newFiles.forEach((file) => {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file)
      previewUrls.value.push(url)
    }
  })
}

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1)
  if (previewUrls.value[index]) {
    URL.revokeObjectURL(previewUrls.value[index])
    previewUrls.value.splice(index, 1)
  }
}

const uploadFiles = () => {
  console.log('Files to upload:', uploadedFiles.value)
  alert('Files ready for upload! Check console for details.')
}
</script>

<template>
  <div class="upload-container">
    <h1>檔案上傳</h1>

    <div class="upload-box">
      <label for="file-input" class="upload-label">
        <div class="upload-icon">+</div>
        <span>選擇檔案</span>
      </label>
      <input type="file" id="file-input" multiple @change="handleFileUpload" class="hidden-input" />
    </div>

    <div v-if="uploadedFiles.length" class="file-list">
      <h2>已選擇的檔案：</h2>
      <div v-for="(file, index) in uploadedFiles" :key="index" class="file-item">
        <div class="file-info">
          <span>{{ file.name }}</span>
          <span class="file-size">{{ (file.size / 1024).toFixed(2) }} KB</span>
        </div>
        <img
          v-if="previewUrls[index]"
          :src="previewUrls[index]"
          class="preview-image"
          alt="Preview"
        />
        <button @click="removeFile(index)" class="remove-btn">刪除</button>
      </div>
    </div>

    <button v-if="uploadedFiles.length" @click="uploadFiles" class="upload-btn">上傳檔案</button>
  </div>
</template>

<style scoped>
.upload-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 80vh;
  display: grid;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  -webkit-text-fill-color: black;
}

h1 {
  height: 20%;
  width: 90vh;
  display: grid;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
}

.upload-box {
  height: 80%;
  border: 2px dashed #646cff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
}

.upload-label {
  cursor: pointer;
  display: block;
}

.upload-icon {
  font-size: 32px;
  color: #646cff;
  margin-bottom: 10px;
}

.hidden-input {
  display: none;
}

.file-list {
  margin-top: 20px;
}

.file-item {
  background: #f1f1f1;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.file-info {
  flex: 1;
  margin-right: 10px;
}

.file-size {
  color: #666;
  font-size: 0.9em;
  margin-left: 10px;
}

.preview-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin: 0 10px;
}

.remove-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #cc0000;
}

.upload-btn {
  background-color: #646cff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
}

.upload-btn:hover {
  background-color: #535bf2;
}
</style>
