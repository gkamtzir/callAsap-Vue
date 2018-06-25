<template>
    <div v-if="country">
        <h3>General information about <b>{{ country.Name }}</b><img v-bind:src="'assets/flagIcons/' + country.Name  + '.png'" width="54" height="40" /></h3>
        <table class="table table-hover center">
            <thead>
                <tr>
                    <td><b>Languages</b></td>
                    <td><b>Responsiveness</b>
                    <div class="tooltipCore">
                        <span class="fa fa-info-circle"></span>
                        <div class="tooltipText">Time (in seconds) in which the call is answered</div>
                    </div>
                    </td>
                    <td><b>Sim needed for 112 calls</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ country.Languages == "Unknown" ? "---" : country.Languages}}</td>
                    <td>{{ country.Responsiveness == "Unknown" ? "---" : country.Responsiveness}}</td>
                    <td>{{ country.SimNeeded112 == "Unknown" ? "---" : country.SimNeeded112}}</td>
                </tr>
            </tbody>
        </table>

        <div v-if="country.OnlyNumber == 'No'">
            <h3><b>Emergency Phone Numbers</b></h3>
            <table class="table table-hover center">
                <thead>
                    <tr>
                    <td><b>Emergency Type</b></td>
                    <td><b>Phone Number</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="emergency of emergencies" v-bind:key="emergency.Number">
                        <td>{{ emergency.Type }}</td>
                        <td>{{ emergency.Number }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="country.OnlyNumber == 'Yes'">
            <h3>The only emergency phone number for this country is 112.</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'country',
        'emergencies'
    ],
    data () {
        return {
      
        }
    }
}
</script>

<style>
.tooltipCore {
    position: relative;
    display: inline-block;
}

.tooltipCore .tooltipText {
    visibility: hidden;
    width: 180px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 3px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -90px;

    opacity: 0;
    transition: opacity 1s;
}

.tooltipCore .tooltipText::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}

.tooltipCore:hover .tooltipText {
    visibility: visible;
    opacity: 1;
}
</style>
