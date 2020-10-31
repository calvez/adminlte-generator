<template>
    <div class="sidebar">
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/dashboard/home" v-b-tooltip.hover="{placement: 'right'}" title="Home">
                        <span><i class="la la-igloo"></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/buy-sell" v-b-tooltip.hover="{placement: 'right'}" title="Exchange">
                        <span><i class="la la-exchange-alt"></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/accounts" v-b-tooltip.hover="{placement: 'right'}" title="Account">
                        <span><i class="la la-user"></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/settings" v-b-tooltip.hover="{placement: 'right'}" title="Setting">
                        <span><i class="la la-tools"></i></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>