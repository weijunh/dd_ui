<template>
    <transition name="fade">
        <div class="message" v-show="show" :class="type">
            <i class="message-icon" :class="'icon-'+type"></i>
            <span>{{message}}</span>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                message: '',
                type: 'success',
                show: false,
                duration: 3000,
                timer: ''
            }
        },
        mounted() {
            this.timer = setTimeout(() => {
                this.show = false;
            }, this.duration);
        },
        destroyed() {
            this.timer = null;
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: 0.3s ease-out;
    }

    .fade-enter {
        opacity: 0;
        transform: scale(1.2) translateY(-10vh);
    }

    .fade-leave-to {
        opacity: 0;
        transform: scale(0.8) translateY(-10vh);
    }

    .message {
        position: absolute;
        left: 0;
        right: 0;
        top: 10vh;
        margin: auto;//浏览器自动计算距离
        box-sizing: border-box;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25vw;
        height: 5vh;
    }
    .message-icon{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .success {
        background-color: #98FB98;
        border: 1px solid 	#32CD32;
        span {
            color: #228B22;
        }
    }
    .icon-success{
        background: url("./icon/success.svg") no-repeat center;
        background-size: cover;
    }

    .error{
        background-color: #FFB6C1;
        border: 1px solid #DB7093;
        span {
            color: #DC143C;
        }
    }
    .icon-error{
        background: url("./icon/error.svg") no-repeat center;
        background-size: cover;
    }

    .warning{
        background-color: 	#FAFAD2;
        border: 1px solid 	#FF8C00;
        span {
            color: #FF8C00;
        }
    }
    .icon-warning{
        background: url("./icon/warning.svg") no-repeat center;
        background-size: cover;
    }

</style>
