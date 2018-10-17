const router = require('express').Router();

const Router = require('./Router');

// function getSubdomain(request) {
//     console.log(request);
//     return 'dev' || request.origin.split("//")[1].split('.')[0];
// }

class Tenant {

    constructor() {
        console.log(this);
        this.getSubdomain = this.getSubdomain.bind(this)
    }

    getSubdomain(request) {
        console.log(request);
        return 'dev' || request.origin.split("//")[1].split('.')[0];
    }

    async findByName(req, res) {
        console.log(this);
        let subdomain = this.getSubdomain(req.headers);

        let details = await req.routerInstance.findByName(subdomain);

        res.send(details)
    }

}

const tenant = new Tenant();

router.use('/', (req, res, next) => {
    req.routerInstance = new Router(req.connection);
    next();
});

router.get('/', tenant.findByName.bind(tenant))

module.exports = router;