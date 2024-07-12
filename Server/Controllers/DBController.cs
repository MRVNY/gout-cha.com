using System.Collections;
using Microsoft.Data.SqlClient;

namespace gout_cha.com;

public static class DBController
{
    private static SqlConnectionStringBuilder _builder = new SqlConnectionStringBuilder();

    static DBController()
    {
        ConnectToDB();
    }

    private static void ConnectToDB()
    {
        _builder = new SqlConnectionStringBuilder();

        _builder.DataSource = "gou-server.database.windows.net";
        _builder.UserID = "gou-server-admin";
        _builder.Password = "Pa$$word";
        _builder.InitialCatalog = "gou-database";
    }

    public static List<Hashtable> MakeQuery(string query)
    {
        List<Hashtable> result = new List<Hashtable>();
        try
        {
            using SqlConnection connection = new SqlConnection(_builder.ConnectionString);
            connection.Open();

            using SqlCommand command = new SqlCommand(query, connection);
            using SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Hashtable row = new Hashtable();
                for (int i = 0; i < reader.FieldCount; i++)
                {
                    row.Add(reader.GetName(i), reader.GetValue(i));
                }
                result.Add(row);
            }
        }
        catch (SqlException e)
        {
            Console.WriteLine(e.ToString());
        }
        return result;
    }
}