<template>
  <h1>编解码</h1>
  <main>
    <div class="input">
      <textarea v-model="text" rows="20" placeholder="请输入内容"></textarea>
    </div>
    <div class="actions">
      <div style="flex: 1">
        <label for="encoding">编码方式:</label>
        <select id="encoding" v-model="currentEncoding">
          <option
            v-for="encoding in encodings"
            :key="encoding"
            :value="encoding"
          >
            {{ encoding }}
          </option>
        </select>
      </div>
      <div>
        <button @click="encodeAction">编码</button>
        <button @click="decodeAction">解码</button>
      </div>
    </div>
    <div class="result">
      <textarea disabled :value="result" cols="30" rows="10"></textarea>
      <CopyIcon class="icon icon-copy" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import CopyIcon from "@/icons/copy.svg"
import { encode, decode, Encoding } from "@/utils/encoding"

const encodings = ["base64", "lzstring"]
const currentEncoding = ref<Encoding>("base64")
const text = ref("")
const result = ref("")

function encodeAction() {
  result.value = encode(text.value, currentEncoding.value)
}

function decodeAction() {
  result.value = decode(text.value, currentEncoding.value)
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
main {
  display: block;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 30px;
}
.actions {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    margin-right: 10px;
  }
  select {
    height: 30px;
    min-width: 200px;
  }
}
textarea {
  width: 100%;
  padding: 15px 10px;
  resize: none;
  border-radius: 4px;
  font-family: monospace, serif;
}
button {
  padding: 0.3em 2em;
  margin: 0 20px;
}

.input {
  position: relative;

  &:hover {
    .icon-clear {
      opacity: 1;
    }
  }
  .icon-clear {
    opacity: 0;
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    right: 10px;
    top: 0;
  }
}
.result {
  position: relative;

  &:hover {
    .icon-copy {
      opacity: 1;
    }
  }
  .icon-copy {
    opacity: 0;
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    right: 10px;
    top: 0;
  }
}
</style>
