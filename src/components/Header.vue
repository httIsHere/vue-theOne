<template>
    <div class="header-container">
        <div class="header-inner">
            <Row>
                <!-- <Col span="12" class="align-left">
                    <span class="day">{{headDate.day}}</span>
                    <span>{{headDate.month + '.' + headDate.year}}</span>
                </Col> -->
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            headDate: {
                day: (new Date()).getDate(),
                month: (new Date()).getMonth(),
                year: (new Date()).getFullYear()
            },
            headWeather: {
                
            }
        }
    }
}
</script>

