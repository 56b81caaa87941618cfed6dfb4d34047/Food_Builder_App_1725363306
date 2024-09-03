<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" class="bg-gradient-to-br from-purple-900 via-pink-800 to-black flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-12">
            <div id="cta-content" class="max-w-screen-md mx-auto text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-10">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-4xl font-extrabold leading-tight tracking-tight text-pink-200">
                        Create Culinary Masterpieces with Ease
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-10">
                    <p id="cta-subtitle" class="flex-1 text-lg font-medium text-purple-200">
                        Discover, design, and build innovative food creations using our intuitive app
                    </p>
                </div>

                <div id="cta-button-container" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-8 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        Start Cooking Now
                        <i class='bx bx-right-arrow-alt ml-2'></i>
                    </a>
                    <a id="free-button" href="#" class="flex-1 text-pink-200 bg-transparent border-2 border-pink-400 hover:bg-pink-900 hover:bg-opacity-30 focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-lg px-8 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        Free Trial
                        <i class='bx bx-gift ml-2'></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
