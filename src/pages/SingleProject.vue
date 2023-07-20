<script>
import axios from "axios";
import { store } from "../store";

export default {
    name: "SingleProject",
    data() {
        return {
            store,
            loading: false,
            loadingError: false,
            project: null,
        }
    },
    methods: {
        getProject(id) {
            this.loading = true;
            axios.get(this.store.apiUrl + this.store.projectsApi + id).then(response => {
                console.log(response.data);
                this.project = response.data.result;
                this.loading = false;
            }).catch(err => {
                this.loading = false;
                this.loadingError = err.message;
                this.$router.push({ name: 'error', params: { code: 404 } })
            })
        }
    },
    mounted() {
        this.getProject(this.$route.params.id);
    }
}

</script>

<template>
    <section>
        <div v-if="project">
            <div class="container mt-5">
                <div class="d-flex">
                    <div class="d-flex">
                        <img :src="store.storageUrl + project.image" />
                    </div>
                    <div class="ms-5">
                        <p><strong>Titolo:</strong> {{ project.title }}</p>
                        <p v-if="project.tipe"><strong>Tipo</strong> {{ project.tipe.name }}</p>
                        <p v-else="project.tipe">
                            <strong>Tipo</strong>: Non esite un tipo per questo progetto
                        </p>
                        <p>
                            <strong>Tecnologia usata</strong>:
                            <span v-for="technology in project.technologies">{{ technology.name }}&nbsp;</span>
                        </p>
                        <p><strong>Descrizione:</strong> {{ project.description }}</p>
                    </div>
                </div>
            </div>
            <a class="btn btn-danger ">
                <router-link class="text-decoration-none text-white" :to="{ name: 'Projects' }">Torna ai
                    progetti</router-link>
            </a>
        </div>
        <div v-else>
            <p>Nessun progetto disponibile.</p>
        </div>
    </section>
    
    <section>
        <div class="container">
            <div class="mb-5 d-flex flex-column">
                <label for="">Aggiungi un commento</label>
                <textarea class="w-50" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <a class="btn btn-primary" type="submit" href="">Invia</a>
        </div>

    </section>
</template>