<template lang="pug">
    .tabs
        ul.tabs__list
            li.tabs__item(v-for="tab in tabs" v-on:click="setActive(tab)")
                router-link.tabs__link(:to="tab.href" :class="{'tabs__item--active' : tab.active}")
                    span.tabs__span {{tab.name}}
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {name: 'About', href: "/", active: true},
                {name: 'Works', href: "/works", active: false},
                {name: 'Articles', href: "/blog", active: false}
            ]
        }
    },
    methods: {
        setActive(tab) {
            this.tabs.forEach((item) => {
                item.active = false;
            });
            tab.active = true;
        }
    }
}
</script>

<style src="styles/tabs.scss" lang="scss" scoped>

</style>