
import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { LogOut, Shield } from 'lucide-react';
import { toast } from 'sonner';

const AdminHeader: React.FC = () => {
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <Card className="mb-6">
      <CardContent className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-900">Admin Panel</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminHeader;
