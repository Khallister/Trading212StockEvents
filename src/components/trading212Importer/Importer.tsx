import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Trading212Record } from "../../types";
import { convertCsvRowToTrading212Record } from "../../utils/transformers";

export function Importer() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [csv, setCsv] = useState<string>("");
  const [trading212Records, setTrading212Records] = useState<
    Trading212Record[]
  >([]);

  // function that return the content of file input
  const onFileLoad = () => {
    setLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setCsv(reader.result as string);

      function parseCsv(result: string) {
        const lines = result.split("\n");
        const records: Trading212Record[] = [];

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
          const record = line.split(",");
          const trading212Record: Trading212Record =
            convertCsvRowToTrading212Record(record);

          if (["Market buy", "Market sell"].includes(trading212Record.action)) {
            records.push(trading212Record);
          }
        }
        return records;
      }

      // parse csv
      const records = parseCsv(reader.result as string);
      setTrading212Records(records);

      setLoading(false);
    };
    reader.readAsText(file!);
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) {
      onFileLoad();
    }
  }, [file]);

  return (
    <>
      <div className="flex flex-col p-2 bg-t212-accent h-screen pt-14">
        <div className="max-h-full overflow-auto flex-1 grow max-w-full min-w-full text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 p-3">
          {trading212Records.map((trading212Record) => {
            return (
              <div
                className="flex justify-between shadow border border-2 border-t212-accent rounded px-2 py-1 mb-2"
                key={trading212Record.id}
              >
                <span
                  className="bg-t212-accent rounded px-2 cursor-default"
                  title={trading212Record.name}
                >
                  {trading212Record.ticker}
                </span>
                <span className={trading212Record.action === 'Market buy' ? 'text-green-700' : 'text-red-700'}>
                  {trading212Record.noOfShares}
                </span>
                <span className={trading212Record.action === 'Market buy' ? 'text-green-700' : 'text-red-700'}>
                  {trading212Record.total}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex-none h-14">
          <label htmlFor="file">
            <input
              type="file"
              id="file"
              name="file"
              accept=".csv"
              onChange={onChange}
            />
            <span>{file ? file.name : "Select a file"}</span>
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Upload"}
          </button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
}
