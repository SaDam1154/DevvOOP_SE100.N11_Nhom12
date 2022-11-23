//* [GET] api/product
const read = async (req, res, next) => {
    // lấy database
    ///

    // trả về cho frontend
    res.json({
        success: true,
        data: [
            {
                num: 1,
                id: 10056771,
                type: 'Cây cảnh',
                name: 'Xương rồng',
                price: 450000,
            },
            {
                num: 2,
                id: 1000003,
                type: 'Cây Nhật Mạt Hương',
                name: 'Sen đá',
                price: 450000,
            },
            {
                num: 3,
                id: 1000009,
                type: 'Cây sen đá kim cương tím',
                name: 'Sen đá',
                price: 450000,
            },
            {
                num: 4,
                id: 1000004,
                type: 'Sen đá Giva',
                name: 'Sen đá',
                price: 450000,
            },
            {
                num: 5,
                id: 1000005,
                type: 'Cây Bình An',
                name: 'Dây leo',
                price: 450000,
            },
        ],
    });
};

module.exports = { read };