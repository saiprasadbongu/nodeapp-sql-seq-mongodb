module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define("contact", {
        
        permanantAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        currentAddress: {
            type: DataTypes.STRING
        },
        user_id:{
            type:DataTypes.INTEGER
        }
        
    },{ timestamps: false })

    return Contact

}