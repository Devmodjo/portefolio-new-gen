import { useState } from "react";
import Layout from "@/components/layout/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye,
  Calendar,
  Tag,
  User,
  BarChart3
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data
const mockPosts = [
  {
    id: 1,
    title: "Les tendances du développement web en 2024",
    excerpt: "Découvrez les technologies et frameworks qui façonnent l'avenir du développement web.",
    content: "Le développement web évolue constamment...",
    category: "Développement",
    status: "published",
    publishedAt: "2024-01-15",
    tags: ["React", "Web Development", "Trends"]
  },
  {
    id: 2,
    title: "Comment créer une interface utilisateur intuitive",
    excerpt: "Les principes fondamentaux du design UI/UX.",
    content: "Une interface utilisateur intuitive...",
    category: "Design",
    status: "draft",
    publishedAt: null,
    tags: ["UI/UX", "Design"]
  }
];

const AdminDashboard = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: ""
  });
  const { toast } = useToast();

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(", ")
    });
    setIsEditing(true);
  };

  const handleCreate = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: ""
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Erreur",
        description: "Le titre et le contenu sont requis.",
        variant: "destructive"
      });
      return;
    }

    const postData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
      publishedAt: editingPost?.publishedAt || new Date().toISOString(),
      status: "published"
    };

    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...postData }
          : post
      ));
      toast({
        title: "Succès",
        description: "Article mis à jour avec succès."
      });
    } else {
      const newPost = {
        id: Date.now(),
        ...postData
      };
      setPosts([newPost, ...posts]);
      toast({
        title: "Succès",
        description: "Nouvel article créé avec succès."
      });
    }

    setIsEditing(false);
    setEditingPost(null);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    toast({
      title: "Succès",
      description: "Article supprimé avec succès."
    });
  };

  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.status === 'published').length,
    draftPosts: posts.filter(p => p.status === 'draft').length,
    totalViews: 1250 // Mock data
  };

  return (
    <Layout
      title="Administration - Gestion du Blog | Jumael Kamga"
      description="Interface d'administration pour la gestion des articles du blog de Jumael Kamga."
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
                Administration
              </h1>
              <p className="text-text-secondary">
                Gérez vos articles de blog et votre contenu
              </p>
            </div>
            
            <Button 
              onClick={handleCreate}
              className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nouvel Article
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Total Articles</p>
                    <p className="text-2xl font-bold text-text-primary">{stats.totalPosts}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Publiés</p>
                    <p className="text-2xl font-bold text-green-500">{stats.publishedPosts}</p>
                  </div>
                  <Eye className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Brouillons</p>
                    <p className="text-2xl font-bold text-yellow-500">{stats.draftPosts}</p>
                  </div>
                  <Edit className="w-8 h-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border-light">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-secondary text-sm">Vues</p>
                    <p className="text-2xl font-bold text-primary">{stats.totalViews}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editor Modal */}
          {isEditing && (
            <Card className="mb-8 bg-gradient-card border-border-light">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-text-primary">
                    {editingPost ? "Modifier l'article" : "Nouvel article"}
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsEditing(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Titre de l'article"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-input border-border-light"
                />
                
                <Input
                  placeholder="Extrait"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="bg-input border-border-light"
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Catégorie"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="bg-input border-border-light"
                  />
                  
                  <Input
                    placeholder="Tags (séparés par des virgules)"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="bg-input border-border-light"
                  />
                </div>
                
                <Textarea
                  placeholder="Contenu de l'article"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={10}
                  className="bg-input border-border-light"
                />
                
                <div className="flex gap-4">
                  <Button 
                    onClick={handleSave}
                    className="bg-gradient-primary hover:opacity-90 border-0"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Sauvegarder
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Articles existants
            </h2>
            
            {posts.map((post) => (
              <Card key={post.id} className="bg-gradient-card border-border-light">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-text-primary">
                          {post.title}
                        </h3>
                        <Badge 
                          variant={post.status === 'published' ? 'default' : 'secondary'}
                          className={post.status === 'published' ? 'bg-green-500' : ''}
                        >
                          {post.status === 'published' ? 'Publié' : 'Brouillon'}
                        </Badge>
                      </div>
                      
                      <p className="text-text-secondary mb-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </div>
                        
                        {post.publishedAt && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                          </div>
                        )}
                        
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          Jumael Kamga
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-secondary rounded-full text-text-muted"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                        className="hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;