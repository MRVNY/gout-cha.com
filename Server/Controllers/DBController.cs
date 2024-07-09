using Microsoft.Data.SqlClient;

namespace gout_cha.com;

public class DBController
{
    private SqlConnectionStringBuilder _builder = new SqlConnectionStringBuilder(); 
    public DBController()
    {
        ConnectToDB();
    }

    private void ConnectToDB()
    {
        _builder = new SqlConnectionStringBuilder();

        _builder.DataSource = "gou-server.database.windows.net";
        _builder.UserID = "gou-server-admin";
        _builder.Password = "Pa$$word";
        _builder.InitialCatalog = "gou-database";
    }

    public string MakeQuery(string query)
    {
        string result = "";
        try
        {
            using SqlConnection connection = new SqlConnection(_builder.ConnectionString);
            connection.Open();

            using SqlCommand command = new SqlCommand(query, connection);
            using SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                //get everything
                for (int i = 0; i < reader.FieldCount; i++)
                {
                    result += reader.GetValue(i).ToString() + " | ";
                }
            }
        }
        catch (SqlException e)
        {
            Console.WriteLine(e.ToString());
        }
        
        return result;
    }
}