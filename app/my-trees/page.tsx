"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PetalButton } from "@/components/ui/petal-button"
import { Search, TreesIcon as Tree, Calendar, MapPin, ArrowUpRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for demonstration
const mockTrees = [
  {
    id: "tree-001",
    species: "Acacia",
    plantedDate: "2023-05-15",
    location: { lat: -1.286389, lng: 36.817223 },
    region: "Nairobi Region",
    status: "Healthy",
    height: 0.8,
    lastUpdate: "2023-11-10",
    images: ["/placeholder.svg?height=400&width=600"],
    co2Absorbed: 2.4,
  },
  {
    id: "tree-002",
    species: "Baobab",
    plantedDate: "2023-06-22",
    location: { lat: -1.292066, lng: 36.821945 },
    region: "Nairobi Region",
    status: "Healthy",
    height: 0.6,
    lastUpdate: "2023-11-12",
    images: ["/placeholder.svg?height=400&width=600"],
    co2Absorbed: 1.8,
  },
  {
    id: "tree-003",
    species: "Fig Tree",
    plantedDate: "2023-07-05",
    location: { lat: -1.270621, lng: 36.803551 },
    region: "Nairobi Region",
    status: "Needs Attention",
    height: 0.5,
    lastUpdate: "2023-11-08",
    images: ["/placeholder.svg?height=400&width=600"],
    co2Absorbed: 1.5,
  },
]

export default function MyTreesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTree, setSelectedTree] = useState<(typeof mockTrees)[0] | null>(null)

  const filteredTrees = mockTrees.filter(
    (tree) =>
      tree.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tree.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tree.region.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-softpink-50 via-white to-green-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="heading-elegant text-3xl md:text-4xl font-bold text-forest-500 mb-4 text-center">My Trees</h1>
          <p className="text-lg text-center mb-8">
            Track the growth and impact of the trees you've planted. See how they're doing and the difference they're
            making.
          </p>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b">
                <TabsList className="mb-4 md:mb-0">
                  <TabsTrigger value="all">All Trees</TabsTrigger>
                  <TabsTrigger value="healthy">Healthy</TabsTrigger>
                  <TabsTrigger value="attention">Needs Attention</TabsTrigger>
                </TabsList>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search trees..."
                    className="pl-9 w-full md:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <TabsContent value="all" className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {filteredTrees.length > 0 ? (
                    filteredTrees.map((tree) => (
                      <div
                        key={tree.id}
                        className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                          selectedTree?.id === tree.id ? "ring-2 ring-forest-500" : ""
                        }`}
                        onClick={() => setSelectedTree(tree)}
                      >
                        <div className="relative h-48">
                          <Image
                            src={tree.images[0] || "/placeholder.svg"}
                            alt={tree.species}
                            fill
                            className="object-cover"
                          />
                          <div
                            className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                              tree.status === "Healthy"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {tree.status}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif font-bold text-forest-700">{tree.species}</h3>
                            <span className="text-xs text-gray-500">ID: {tree.id}</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>Planted: {new Date(tree.plantedDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{tree.region}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Tree className="h-4 w-4 mr-2" />
                              <span>Height: {tree.height}m</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <Tree className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">No trees found</h3>
                      <p className="text-gray-500 mb-6">
                        {searchQuery
                          ? `No trees match your search for "${searchQuery}"`
                          : "You haven't planted any trees yet"}
                      </p>
                      <Link href="/plant-a-tree">
                        <PetalButton
                          className="bg-forest-500 hover:bg-forest-600 text-white"
                          petalType="rose"
                          petalColor="green"
                        >
                          Plant Your First Tree
                        </PetalButton>
                      </Link>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="healthy" className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {filteredTrees.filter((tree) => tree.status === "Healthy").length > 0 ? (
                    filteredTrees
                      .filter((tree) => tree.status === "Healthy")
                      .map((tree) => (
                        <div
                          key={tree.id}
                          className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                            selectedTree?.id === tree.id ? "ring-2 ring-forest-500" : ""
                          }`}
                          onClick={() => setSelectedTree(tree)}
                        >
                          <div className="relative h-48">
                            <Image
                              src={tree.images[0] || "/placeholder.svg"}
                              alt={tree.species}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {tree.status}
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-serif font-bold text-forest-700">{tree.species}</h3>
                              <span className="text-xs text-gray-500">ID: {tree.id}</span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center text-gray-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>Planted: {new Date(tree.plantedDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{tree.region}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Tree className="h-4 w-4 mr-2" />
                                <span>Height: {tree.height}m</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <Tree className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">No healthy trees found</h3>
                      <p className="text-gray-500 mb-6">
                        {searchQuery
                          ? `No healthy trees match your search for "${searchQuery}"`
                          : "You don't have any healthy trees yet"}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="attention" className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {filteredTrees.filter((tree) => tree.status === "Needs Attention").length > 0 ? (
                    filteredTrees
                      .filter((tree) => tree.status === "Needs Attention")
                      .map((tree) => (
                        <div
                          key={tree.id}
                          className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                            selectedTree?.id === tree.id ? "ring-2 ring-forest-500" : ""
                          }`}
                          onClick={() => setSelectedTree(tree)}
                        >
                          <div className="relative h-48">
                            <Image
                              src={tree.images[0] || "/placeholder.svg"}
                              alt={tree.species}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              {tree.status}
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-serif font-bold text-forest-700">{tree.species}</h3>
                              <span className="text-xs text-gray-500">ID: {tree.id}</span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center text-gray-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>Planted: {new Date(tree.plantedDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{tree.region}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Tree className="h-4 w-4 mr-2" />
                                <span>Height: {tree.height}m</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <Tree className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">No trees need attention</h3>
                      <p className="text-gray-500">
                        {searchQuery
                          ? `No trees needing attention match your search for "${searchQuery}"`
                          : "All your trees are healthy!"}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {selectedTree && (
            <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="heading-elegant text-2xl font-bold text-forest-600">
                    {selectedTree.species} <span className="text-gray-400 text-sm">({selectedTree.id})</span>
                  </h2>
                  <Button variant="outline" size="sm" className="text-forest-600 border-forest-200">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={selectedTree.images[0] || "/placeholder.svg"}
                        alt={selectedTree.species}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="relative h-20 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt={`${selectedTree.species} view ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-forest-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-forest-700 mb-1">Status</h3>
                        <p
                          className={`font-bold ${
                            selectedTree.status === "Healthy" ? "text-green-600" : "text-yellow-600"
                          }`}
                        >
                          {selectedTree.status}
                        </p>
                      </div>
                      <div className="bg-forest-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-forest-700 mb-1">Height</h3>
                        <p className="font-bold text-forest-600">{selectedTree.height} meters</p>
                      </div>
                      <div className="bg-forest-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-forest-700 mb-1">Planted On</h3>
                        <p className="font-bold text-forest-600">
                          {new Date(selectedTree.plantedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="bg-forest-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-forest-700 mb-1">Last Updated</h3>
                        <p className="font-bold text-forest-600">
                          {new Date(selectedTree.lastUpdate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="bg-forest-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-forest-700 mb-1">Region</h3>
                        <p className="font-bold text-forest-600">{selectedTree.region}</p>
                      </div>
                      <div className="bg-forest-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-forest-700 mb-1">CO₂ Absorbed</h3>
                        <p className="font-bold text-forest-600">{selectedTree.co2Absorbed} kg</p>
                      </div>
                    </div>

                    <div className="bg-forest-50 p-4 rounded-lg mb-6">
                      <h3 className="text-sm font-medium text-forest-700 mb-2">Location</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-forest-600">
                          {selectedTree.location.lat.toFixed(6)}, {selectedTree.location.lng.toFixed(6)}
                        </p>
                        <Button size="sm" variant="ghost" className="text-forest-600 h-8">
                          <MapPin className="h-4 w-4 mr-1" /> View Map
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-forest-700 mb-2">Growth Progress</h3>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-forest-500 rounded-full"
                          style={{ width: `${(selectedTree.height / 3) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0m</span>
                        <span>Expected height: 3m</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  <h3 className="heading-elegant text-xl font-bold text-forest-600 mb-4">Recent Updates</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-forest-700">Maintenance Visit</span>
                        <span className="text-sm text-gray-500">
                          {new Date(selectedTree.lastUpdate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Regular maintenance visit completed. Tree is growing well with healthy foliage. Added mulch
                        around the base and checked soil moisture.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-forest-700">Growth Measurement</span>
                        <span className="text-sm text-gray-500">
                          {new Date(selectedTree.plantedDate).getTime() + 7776000000 > new Date().getTime()
                            ? new Date(new Date(selectedTree.plantedDate).getTime() + 7776000000).toLocaleDateString()
                            : new Date(selectedTree.lastUpdate).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Tree height measured at {selectedTree.height}m. Growth rate is on track with expectations for
                        this species and age.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link href={`/tree-details/${selectedTree.id}`}>
                    <Button variant="outline" className="text-forest-600 border-forest-200">
                      View Complete History <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
