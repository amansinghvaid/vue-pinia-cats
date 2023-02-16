<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Text</th>
                <th scope="col">Updated</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cat, i) in catsList" :key="cat._id">
                <th scope="row">{{ i+1 }}</th>
                <td>{{ cat.user }}</td>
                <td>{{ cat.text }}</td>
                <td>{{ dateTime(cat.updatedAt) }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import moment from 'moment'
import { storeToRefs } from 'pinia'
import { useCatStore } from '../stores/catStore'

const { catsList } = storeToRefs(useCatStore())

function dateTime(value) {
    return moment(value).format('YYYY-MM-DD');
}
</script>