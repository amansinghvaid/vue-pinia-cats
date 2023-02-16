<template>
	<div class="container">
		<div class="d-flex justify-content-between mt-5 mb-4">
			<h1>Cats List</h1>
			<button type="button" @click="router.push({name: 'home'})" class="btn btn-success">Home</button>
		</div>
		<CatsTable/>
	</div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useCatStore } from '../stores/catStore'
import CatsTable from '../components/CatsTable.vue'
import { useRouter } from 'vue-router';

const { getCats } = useCatStore()
const router = useRouter()

onMounted(() => {
    getCats()
})

</script>