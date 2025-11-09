import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, XCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminImports = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const mockImports = [
    { id: "IMP-001", school: "Lycée Mohammed V", rows: 245, valid: 240, invalid: 5, status: "pending", date: "2024-01-15" },
    { id: "IMP-002", school: "Université Hassan II", rows: 1200, valid: 1200, invalid: 0, status: "merged", date: "2024-01-14" },
    { id: "IMP-003", school: "Lycée Al Wahda", rows: 180, valid: 175, invalid: 5, status: "reviewed", date: "2024-01-13" },
  ];

  const handleUpload = () => {
    if (selectedFile) {
      toast({
        title: "Upload Started",
        description: `Processing ${selectedFile.name}...`,
      });
      setSelectedFile(null);
    }
  };

  const handleMerge = (id: string) => {
    toast({
      title: "Merge Completed",
      description: `Import ${id} merged successfully`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Student Imports</h1>
        <p className="text-muted-foreground">Upload and manage Massar student data</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Import</CardTitle>
          <CardDescription>
            Upload an Excel file containing Massar numbers and student information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="flex-1"
            />
            <Button onClick={handleUpload} disabled={!selectedFile}>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Expected columns: SchoolCode, MassarNumber, FirstName, LastName, DOB, Class, City</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import History</CardTitle>
          <CardDescription>Review and manage imported batches</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>School</TableHead>
                <TableHead>Total Rows</TableHead>
                <TableHead>Valid</TableHead>
                <TableHead>Invalid</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockImports.map((imp) => (
                <TableRow key={imp.id}>
                  <TableCell className="font-mono text-sm">{imp.id}</TableCell>
                  <TableCell>{imp.school}</TableCell>
                  <TableCell>{imp.rows}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-success">
                      <CheckCircle className="h-4 w-4" />
                      {imp.valid}
                    </span>
                  </TableCell>
                  <TableCell>
                    {imp.invalid > 0 ? (
                      <span className="flex items-center gap-1 text-destructive">
                        <XCircle className="h-4 w-4" />
                        {imp.invalid}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">0</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      imp.status === "merged" ? "default" :
                      imp.status === "reviewed" ? "secondary" :
                      "outline"
                    }>
                      {imp.status === "pending" && <Clock className="mr-1 h-3 w-3" />}
                      {imp.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{imp.date}</TableCell>
                  <TableCell>
                    {imp.status === "pending" && (
                      <Button size="sm" variant="outline" onClick={() => {}}>
                        <FileText className="mr-1 h-3 w-3" />
                        Review
                      </Button>
                    )}
                    {imp.status === "reviewed" && (
                      <Button size="sm" onClick={() => handleMerge(imp.id)}>
                        Merge
                      </Button>
                    )}
                    {imp.status === "merged" && (
                      <span className="text-sm text-muted-foreground">Complete</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminImports;
