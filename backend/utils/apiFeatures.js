class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i", //case insensitive
                },
            }
            : {};

        // console.log("keyword ::", keyword);

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        // this spread operator ... makes the copy. not only reference //below one reference
        // const queryCopy = {this.queryStr}

        // spread operator
        const queryCopy = { ...this.queryStr }

        // console.log("before", queryCopy);

        // Removing some fields of cateogry

        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach(key => delete queryCopy[key])




        // **** Filter for Price *****

        // console.log("queryStr", queryCopy);


        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        // console.log("queryStr 1:",queryStr);


        // console.log("after", queryCopy);

        this.query = this.query.find(JSON.parse(queryStr))

        // console.log("queryStr", queryStr);
        return this;

    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}

module.exports = ApiFeatures;
