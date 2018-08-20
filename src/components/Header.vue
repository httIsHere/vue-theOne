<template>
    <div class="header-container">
        <div class="header-inner">
            <Row>
                <Col span="12" class="align-left">
                    <span class="day">{{headDate.day}}</span>
                    <span>{{headDate.month + '.' + headDate.year}}</span>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: [headerDate],
    data() {
        return {
            headWeather: {
                
            }
        }
    }
}
</script>

