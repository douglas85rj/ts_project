import {DataTypes, Model, Optional} from 'sequelize';

interface StockAttributes {
    id: number;
    name: string;
    description: string;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;

}

interface StockCreationAttributes extends Optional<StockAttributes, 'id'> {}

export class Stock extends Model<StockAttributes, StockCreationAttributes> implements StockAttributes {
    id!: number;
    name!: string;
    description: string;
    quantity!: number;
    

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const StockInit = (sequelize) => {
    Stock.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER
       
    }, {
        sequelize,
        tableName: 'stock'
    });
};
