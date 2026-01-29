import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { MapPin, Clock, DollarSign, Search, Plus, Star } from 'lucide-react';

export function Jobs() {
  const jobs = [
    {
      id: 1,
      title: '한인마트 파트타임 직원 구합니다',
      company: '한국마트',
      location: '어번',
      type: '파트타임',
      wage: '$12/시간',
      time: '2시간 전',
      isPremium: true,
      description: '주말 근무 가능자 우대, 영어 기본 회화 필수',
    },
    {
      id: 2,
      title: '식당 주방 보조 구인',
      company: '서울식당',
      location: '오펠라이카',
      type: '풀타임',
      wage: '$14/시간',
      time: '5시간 전',
      isPremium: false,
      description: '경력 무관, 성실한 분',
    },
    {
      id: 3,
      title: '청소 알바 급구',
      company: '개인',
      location: '어번',
      type: '단기',
      wage: '$15/시간',
      time: '1일 전',
      isPremium: true,
      description: '이번 주 금요일, 4시간 근무',
    },
    {
      id: 4,
      title: '배달 드라이버',
      company: '배달의민족',
      location: '어번/오펠라이카',
      type: '파트타임',
      wage: '$13/시간 + 팁',
      time: '1일 전',
      isPremium: false,
      description: '자차 보유 필수, 주중/주말 자유 근무',
    },
    {
      id: 5,
      title: '미용실 헤어 디자이너',
      company: '미용실 서울',
      location: '어번',
      type: '풀타임',
      wage: '$20/시간 + 커미션',
      time: '2일 전',
      isPremium: false,
      description: '경력 2년 이상, 미국 라이센스 보유자',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">구인구직</h1>
          <p className="text-gray-600">총 {jobs.length}개의 구인 공고</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          구인 등록
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="sm:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="검색어 입력..." className="pl-9" />
              </div>
            </div>
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
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="근무 형태" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="fulltime">풀타임</SelectItem>
                <SelectItem value="parttime">파트타임</SelectItem>
                <SelectItem value="temporary">단기</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Job Listings */}
      <div className="space-y-3">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {job.isPremium && (
                          <Badge variant="destructive" className="gap-1">
                            <Star className="w-3 h-3" />
                            프리미엄
                          </Badge>
                        )}
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-3">{job.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">{job.description}</p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {job.wage}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      {job.time}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2">
                  <Button className="flex-1 sm:flex-none">지원하기</Button>
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    상세보기
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Premium Ad Banner */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg mb-2">구인 공고를 더 많은 사람에게!</h3>
          <p className="text-gray-700 mb-4">
            프리미엄 구인으로 상단 노출 및 강조 표시를 받으세요
          </p>
          <Button variant="default">프리미엄 구인 알아보기</Button>
        </CardContent>
      </Card>
    </div>
  );
}
