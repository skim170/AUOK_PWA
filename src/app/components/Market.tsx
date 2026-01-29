import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Search, Plus, Heart, MessageCircle, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Market() {
  const items = [
    {
      id: 1,
      title: '소파 팝니다',
      price: 150,
      category: '가구',
      location: '어번',
      time: '1시간 전',
      condition: '중고',
      likes: 12,
      comments: 5,
      image: 'brown leather sofa',
      isPremium: false,
    },
    {
      id: 2,
      title: '아이폰 14 Pro',
      price: 650,
      category: '전자제품',
      location: '오펠라이카',
      time: '3시간 전',
      condition: '중고 (거의 새것)',
      likes: 24,
      comments: 11,
      image: 'iphone smartphone',
      isPremium: true,
    },
    {
      id: 3,
      title: '유아용 카시트',
      price: 50,
      category: '유아용품',
      location: '어번',
      time: '5시간 전',
      condition: '중고',
      likes: 8,
      comments: 3,
      image: 'baby car seat',
      isPremium: false,
    },
    {
      id: 4,
      title: '다이닝 테이블 세트',
      price: 200,
      category: '가구',
      location: '오펠라이카',
      time: '1일 전',
      condition: '중고',
      likes: 15,
      comments: 7,
      image: 'dining table chairs',
      isPremium: true,
    },
    {
      id: 5,
      title: '삼성 냉장고',
      price: 300,
      category: '가전',
      location: '어번',
      time: '1일 전',
      condition: '중고',
      likes: 19,
      comments: 9,
      image: 'modern refrigerator',
      isPremium: false,
    },
    {
      id: 6,
      title: '자전거 (성인용)',
      price: 80,
      category: '스포츠',
      location: '오펠라이카',
      time: '2일 전',
      condition: '중고',
      likes: 6,
      comments: 2,
      image: 'mountain bike',
      isPremium: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">중고마켓</h1>
          <p className="text-gray-600">총 {items.length}개의 상품</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          판매 등록
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="sm:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="상품 검색..." className="pl-9" />
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="furniture">가구</SelectItem>
                <SelectItem value="electronics">전자제품</SelectItem>
                <SelectItem value="baby">유아용품</SelectItem>
                <SelectItem value="appliances">가전</SelectItem>
                <SelectItem value="sports">스포츠</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="지역" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="auburn">어번</SelectItem>
                <SelectItem value="opelika">오펠라이카</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="relative aspect-video bg-gray-100">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x600/?${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.isPremium && (
                <Badge className="absolute top-2 left-2 bg-yellow-500">
                  프리미엄
                </Badge>
              )}
              <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <CardContent className="p-4">
              <div className="mb-2">
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
              </div>
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">
                ${item.price}
              </p>
              <p className="text-sm text-gray-600 mb-3">{item.condition}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.time}
                </span>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t text-sm">
                <span className="flex items-center gap-1 text-gray-600">
                  <Heart className="w-4 h-4" />
                  {item.likes}
                </span>
                <span className="flex items-center gap-1 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  {item.comments}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Premium Ad Banner */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg mb-2">상품을 더 빨리 판매하고 싶으신가요?</h3>
          <p className="text-gray-700 mb-4">
            프리미엄 판매로 상단 고정 및 자동 끌올 기능을 이용하세요
          </p>
          <Button variant="default">프리미엄 판매 알아보기</Button>
        </CardContent>
      </Card>
    </div>
  );
}
