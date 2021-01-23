const express = require('express')
const app = express()
const PORT = 3000
const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900,
        avatar: 'data:image/jpeg;base64,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',
        routName: 'yoda',

    },
    {
        name: 'Luke',
        forcePoints: 10000,
        role: 'Jedi Master',
        age: 40,
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFRUXGBcYFxYYGBcYFhgXGBcXFxcXFRgYHSggHRolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGCsfHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA/EAABAwIDBQUGBAQFBQEAAAABAAIRAyEEMUEFElFhgQZxkaHwEyIyscHRB0Jy4TNSYvEXI0OSoiRTY3OCFP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgMAAgICAwAAAAAAAAABAhEDITEEEiJBE2FRUnH/2gAMAwEAAhEDEQA/ANAhCFRK/b2P9jQe/WIb+o2H36LzNjjEE3cZN9OC1/b6vApt/U4+QH1Xn7qh1zKxz7rTHqL2g0mzR3mJHQJjGUveuXDUuOZ7gouCriRJcTyyyyViyi43vc5RnwiLqLGsu0DF09WjdblvGZPM3M9LKHWJP5nuPEzHmVb4iGyDmbXEKor1OXyRjU5RCqtgmb8QVHqM4dFNNKfeNm9b8lGxNUCzevFaxnUZ44+SSRzXc1wNhWgbqGm667RdAsmHC1KKSTeUudEAlr4NlbB4ezeM/wBXJ2jhyVQpOCxG6b/C6x+h6KbDlTMNVvuE30clYlkjfbIOTxz4hRy0B0c/nwUlrzZw1zHPuUqQSn2VLX7jwSMTSDTyNxySWXEJkl0rHOQfJO4d5a4jwUKk4xPDP91MdCmw49Z7PbQ9vQa/8w9136h97HqrJYDsBtHdqGkcn5cnD9p8lv1eN6TQhCFRBCEIAQhCAwnbh81gNGtHndY97QTJWj7Y1JrP71mHmOU+rBY2tDtDhl4q4weKdG7mct6cvHJU2GMmB5aKyw9AjIgg6ZjnbVSuE13wNSefzVdVdnfyyVhVboYnjkOslQKkehmlOhl2YrydCfkotWhB+wgKc1M1CeEBaS1nUJzCmnKQeXim93gqlLRuF1OimSYC69kevknstE7q4Etz8u5NuRsEvXQF1rdUvcRaD9cSGnWGz4fdOUn2v670wH5CdP7LtM+vNKnD494Fp6KPRkG+ikQQZTdT4kodKYfePNPsGnBRG5qU1FET9kYg06rXDNpB87r2FeL4U3XstD4W9w+QRgMi0IQtEBCEIAXCV1Rdp1N2jUdwY75JUPMe0dfeqOdxcVUvbIT+PfLvXyTDTIWLQllrDM2+/VXeznANB17vy+oVS1mpGilYetGR+/LoltcTapk2AtmDn19WUDEQDMHu+g5K0rtMZ24DXXPUlVxA3pNp6nyUVSKW8fJNVaY1hTKlM9ybNGFUqLir3jwSGULqW9g1tddholV9i0a3AAor/X7KWaZPIJl7YThUxu8V32drpxgkhScS2w8U7SkQmtsnN2yXuXg+rJRCNjSNCkASDHq6bLck8wWPrP8AsmSZhHhzd0xfI8D9lBxNIgzz8CnaRjuzUqrDm3HI9+hCW9KVzc1IH0UeozdMJ9pkJlEnCMlzRxIHjZeztbAA4W8LLybstR3sVRGhcD4Xv4L1pPGFkEIQrSEIQgBVvaR8YaqR/LHiQFZKn7WtnCv6fNTl4c9eWVQXEAX4p+tRa0ARBz59VMw9IXcchpxOgUJ9TeJJzJ+qwtbSGqzSBZMsdrJVyzY1d9P2jW7zRmZuJztqqmpR3fitHEImUGWNiwotMTrofslQeF+KiYapOp9cArzBYfdaHOs3hq48AdUsqvDHaB/+fXinqWE/M4jkNbK1oYH2plwgefRKxuEpsaTrpn5cVntt/HqbZ/EsByH3lN1MKGi4upXsgASbR4zwUas4nuVMr/ZlzZBnx+g+yh1aBtbO6sxTMSbAX70yKZJ5qto+u0bDUL801iCCY0U6t7ogZ8eH7qEKcpyllP0HAeQ+SQReE97I9VyIninstGag04fNO02ZpsC6l02wE9lIZbTy7k5TdaPXJOsaAEy4XRvZ6MOqA2PQ8PunaIEKPWsb39aJ3DHhkrQ0nYmBi2ag70d+65emry3smYxdL9XzBXqSeJUIQhWkIQhACq+07Jw1QcgfMK0TOMw4qMcw/mEJXw568uquIbutsAPEnX5qrruI62HcD91p9qMAblGZ+gHl5rKV3ZcreK5cfXTnNPS+wLpwxn+b6BM7S7GCpUc7esZho08dE1+HNWaL/wBU+IWvGKa2L365LlytxyunfhjMuObecjsxXDvgIvEZmeStqOwK2bsmiCTcNtkNAeS2VbarBYEEn1EC6exT2VKBbBHu2iRfkIjxVTK1P8cx/TCYrHsoiAJOUk68YWfxWNc9xJJWgpdkaz3EkhonMuE+SexHYCoI3azCNYBCuWM85nayFarxGWTdBzPEopMJMk+uS0uL7ImlcnePK+arjs95yaQB4qplEXiy/aqqPJKBSMEzn4qwrYEt7/XRRHUTPHkjaLhUOs3QZJ/DYTVS24WILvBDqndCexMP8mKuG0VdiKe76up9Woe9Qahk3TxTnozRpqSmXFd3yr9Z70fAse+PIJjEWJTjKhmPUpmu6bpyC3ozigLdwTdKJXaxn13poLSMq0Ox6xZWpvn4XNPSbr1qF4phKtu7yXsGyMR7ShTfxaJ74g/JPEZJaEIVpCEIQAuLqEBgNtUd15pG+423cRIKylaj8XmNe8La9vMMWuZWGRG47vF2+InwWOrXE+p0XLZrJ07+0ar8N3mKrNSAR8reKt3VKrbOB6Zf3VT+HP8AFd+n6rf4qgHNylc2V/Ou/i39JGQdiiP9Mk8b+aZdtTj7vjPmpm2q+5YCScgDqqijSqVTDWmodQ0w0d7j6zV4zY5L9f2U7tCW5Ov681Kodr3D4r/NZnamBrMc8G+6/cIYd529EwG/ERneIULDNc7dcJLXHOIWt4unJPkXfr0ZnaBjmifR6JXt2OFjn6KyGEwhm5txGY5FaHZuDIn81ssiubKad/FlcvYXjKIeYtwSK2EptFh1/ZWjMBvXaO+cxHBUO26xaSEpdrymM7RcSxlzIVXiXNaExisSTmVBqOnmtscXBycm/HMRXPHoo7N4mwT3szGUxnwSKjXtIBBuS0EXaSMw1wscwbHIjiumY9OW3vs42g5LfhyALXufsk02vE8s09SxBETlxU2WHNVHNIqPVEWVtUcCq3FC6JRlNIp9eK6Yjn5Je7qmW5FaM6lYYXXqXYpxOEZOheP+RP1XllAwV6j2IP8A0o/W76FOelfF+hCFaQhCEAIQhAV+3sB7eg+nrEt/ULj7dV5SLSHDIwQfPqCvZlke1vZ8EmvTH/saOf5h9fFZcmPW2nHf0j/hwP8AOdF5bwXpJZx1XnH4Y2xDx/T9V6bXbB71wZzvb0sL+MUuK2DSqEl46ZDwGfVNUQ3Dn4RFm7ubXN0BjKOPNXzmyFHq4YkTny0PfxTxy1Wm5eqxHanZtKo/29GxePfpuiA7UtcDcdAqGjgS2CS22QbJErabQ2feYjpxzWexeDdMAH6LW8+ViJ8TCdomzX7tXeIDhlEx3nmt/s3D0nDebkcvssZsvZDnOA04rf4KkKVINAWOV32019ZqJOBpiHBeb9sTFQxkvRcG73j3Fed9smneJU4/otXWTGYg3SXAxAEpVYXSQbwuuOCpuDuNxzZBzjNPVdn7hEEGMpse4hQ6LiDZTquID87Fafy2dF/FjXHQ1uhJuSfCwUA0lIqD9kjdSyzuXpTCTwlrVDxIU5RsSLKYeXivqOgdE1SSqqSAtmFPMXrXY+ju4Slzl3iTHlC8twGGNR7Wtu5xAA5lezYWgGMawZNAaOghPEqdQhCtIQhCAEIQgBcI0XUICr2Ds5tLEO3SJ04wbgdFrKj5Cxe0sM9uKo12zugta/xIE+Pktg6xXn8uP1tepxZzPGf0eolSQ2VCIvY5qRSJNvDvWeJ5Q1i2DWFW4vZ4It+6uvY7xH9k+/BAAQJ71ejnL9elJgtnhomP38kVnaaKzxLQGgdefBQXkcFnlF45fbujDP3QTyWB7YPBdC3Tj7hMLzntTUl5Od1Uni/McqzVVl004KS5ILVu4DbHJ9pTRASmJnIcQltXSEj0bATVQTZPuTL04nJW1qMEBWWydg1MRZgyzcTDRrcqFjgZETMxbWdF6t2bwPscNTYRDt0Fw13nXM89Oi2xm3PldIXZns0zDDedDqvHRoyhv3WgQhaSaZhCEJkEIQgBCEIAQhCARWphwIOv91bB8gO45hVhUzCO92O9c3yMfx26vi5flo+16epd6jwugHiuKV32LbDP5/spGIq2OfrmqygYSsZWMfJaSsLhvJEr1XPqWyATVCmRJg8P3UtlMsYXtzVZQ7Se/wCzfTPJ0SO4kZIsn7dE3Z+M8P4yzIMjhp1Xm3aAkPjqvUNobQpvjebAAiAYXnPaXcLjBTmtjv8Aju5plMSTmmKdU6qa+owWkJL6bYWzi0WGWlJDUrCO9yChySp4Au7yQCglAdcU09dLk1KcZ5VsexWy6Zaa7gC8Ohs/lgCSOZnNa5ZnsJXYaLmhw398kt1AsAe6y0y6cfHNl6EIQqSEIQgBCEIAQhCAEIQgBSMG7MKOutdBlRyY/bGxpxZ/XKVYkJ2hmmKZ/ZO0HX6BeXXq3xKA1sOCbNOXCSlVHQozax8FeKMZVkx4iIsqx2DaHbzXbpS2Ym8JvFOkyMtRb5LRWEsqPtzCMqDe3i0xm2B4jUrAbV2GYLhVBF7wZ/Za3a1cgcp9BVWHwxcx8iSNEb7aXDrVYB2GYHXFxqlG9k7tOmWvITDGytN7cV6ujtN10qoUzvQlF6A4HLrim10myEbNlcJgFBKYrO04qoinsJi30/8AMYYc24PdoeRXq+yNoNr0WVW5OEkcDk4dDK8fxL92mRxWs/C/aU+0w5P9bPk8D/iVvh4xz9b9CEK0BCEIAQhCAEIQgBCEIAQUIQD1CrFlMw77qtT1CrGa4vkcevyjv+Ny/afSpWKrXVTi9qMaYkDip+LEi2aqhshpMuErmld+M6SsNj5uLqZiMWzdlzo8FGxOzqbhEQRwt8s1Bo9n2kkF0D+a58brTGb8VrG90xtPalJ43QDbVMN2rRptPvEk6KPtHYLmkgOMd9om0qpdsl28ffNp4HWPqq1Ydl11EDaQD3TkoLxAhSdoYAi+8T4KnqAz8RV4uDlll8SF0uUdoOpKWBCqsSnmy450Bce6yYfU+6JE2u1HwmmG8pl75K6XLSRnsxjqsqx7G4z2eMombF26e54LfqqbEPkruGqbrmuGYIPgZC2xmoyvr39CoMD2ywVX/VFM8Kg3PM+75q+a4ESCCDkRcdCEydQhCAEIQgBCEIAQhIrVWsaXOcGtGZJAHiUAtBKx22fxBoU5bRBrO43awdSJd0tzWC2z2nxOJtUqHd/kb7rOrQb9SUB6PtvtvhaEtafbVB+Vnwz/AFPy8JWR/wAQMSazXndFMG9NozHNxuT4dyxhKN5K47mqrHK43cfQeydpMxFJr6Z3gR1HI8wp1IgG68R7F9pnYSrB/hPI3hw4OC9rova8BzbgjPkvN5eO4V63Dyzkx/sVKihV8UWA28FPc6bBMnCl55eSylrommexu1iNM1VV9pHOLnMrWYjYbTcm6pcdsoNW0t/Yyyt8rMY7FOOkyqZxWhx1Ld0VJWcNFpK4eXe+zC5vpuq9NbyrW3PboutUUWpVTdasmwNTlxW0xZ3LZ6mNU1ia+g6pqvipEDJRgVpMf8s7SyUSkldCtJ0FTNmbaxGHM0qrm8plp72m3kq9pQTokHpOxPxGa6G4lm7/AORkkf8A03MdCVt8JimVWh9N7XtOTmmQvAGsJt5q62JiquHPtaNaP5m5tP6mn4vmjQe1oXm3+ImI/wC1S8H/AHQjQekqBj9s4eiP8yq1vKZd/tF15BjO1eJqWdUceseSp61YuzKNB6Ltr8SGiW4anJ/nqZdGg/M9FhtqbZr13TVqOdwBNh3AWCroSoTAQhCAJXHJTUo0+CVo0ZBW6/D/ALXGg72NVxNJxsT+Q5f7eSwzqZBTlF0FTnhMpqrwzuF3H0nRew3B8Pon2kCV472U7YmiBSrGaf5X6s5Hi1ej4farHsDmuBB1BkFefnx3CvU4+THknVTcXjg1UG0MaDJsofaHG2sYVHsWoHuO+6QibaXOY36w5tGoYOqzdV8WWl27iGtEC3BZOvV14rTDty897Ie7OVDrVJsE68E8k25oaCSt8Y47s0WgXKi165dyC5Vqk5pty2k0ztclKC4CuhUTsrocklcCAXKVuFIalEoBRfol028fCfmmmmEreQD/ALQ/yhCa3hwQgIwCXC4DKUgALiEIAQhCA6CuhyShGgdDkFmoTUpbXKdGUFLwO1a1H+G8gHTMdQVEK5KNS+iWzuL2j2jc8htWADq391p8NsthaKlOs4jhA815w8Kx2Vtd9IwHGPWiyz4/9XRx83f5dtZXwu8fec4+ATQwbG/C36+acwmPbVzse+ynUcKsLbHTMZl3FaMA0mSOgVV2hwwYwaEnLkM1s2YRYDtJjhUqujIe63pmVfFu5M+eTHD/AKplxdQutwhdAXF1AcISmU1xLBQCnNTZKc3U2UBxdC4uhACEqEIBpqUhCAEIQgBCEIBTclwoQgEroQhAKCAhCIZTc01r1QhCYu9lfCO9bnZ/wt7l1C4uX16PxvEiv/Df+k/IrybEfF4fJCFr8fyp+Z7CEkoQuhwurqEIATnBCEAsJl2aEJhxdCEJAtCEJh//2Q==',
        routName: 'luke',

    },
    {
        name: 'Princess Leia',
        role: 'General Princess',
        forcePoints: 100,
        age: 40,
        avatar: 'data:image/jpeg;base64,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',
        route: 'leia'
    }
]


app.get('/', (req, res) => {
    res.send('May the force be with you!')
})

app.get('/api/chatacters', (req, res) => {
    res.json(characters)
})

app.listen(PORT, () => {
    console.log(`Server lisetning on http://localhost:${PORT}`)
})