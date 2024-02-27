export default interface DAO<T> {
    create(data: T): Promise<T>;
    findByID(id: number): Promise<T>;
}