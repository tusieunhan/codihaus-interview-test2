<template>
    <div class="group_btn btn color-primary bg-acceny " :class="class">{{text}}</div>
</template>

<script>
export default {
    props: {
    text: String,
    class : String
    },
    setup () {
        

        return {}
    }
}
</script>
