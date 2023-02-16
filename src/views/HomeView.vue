<template>
	<div class="container">
		<div class="d-flex justify-content-between mt-5 mb-4">
			<h1>Welcome</h1>
			<button type="button" @click="router.push({name: 'cats'})" class="btn btn-success">Fetch Cats</button>
		</div>
		<CatsTable v-if="catsList.length"/>
	</div>
</template>
<script setup>
import CatsTable from '../components/CatsTable.vue'
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useCatStore } from '../stores/catStore'

const { catsList } = storeToRefs(useCatStore())
const router = useRouter()


</script>