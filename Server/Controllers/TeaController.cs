namespace gout_cha.com;

using Microsoft.Data.SqlClient;

public class TeaController
{
    public string GetTea(string id)
    {
        DBController db = new DBController();
        return db.MakeQuery($"SELECT * FROM Tea WHERE id = {id}");
    }
}